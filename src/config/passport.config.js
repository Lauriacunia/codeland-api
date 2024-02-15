import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userService from "../services/user.service.js";
import { encryptPassword, comparePassword } from "../config/bcrypt.js";

const localStrategy = LocalStrategy;

/** Hay dos funciones que passport necesita para trabajar con los ids de los usuarios
 * en toda la app:
 * serializeUser: para guardar el id del usuario en la sesion
 * deserializeUser: para obtener el usuario de la base de datos por el id */
passport.serializeUser((user, done) => {
  done(null, user.id); // Utiliza el _id de MongoDB
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userService.getOne(id);
    if (!user) {
      return done(null, false); // Usuario no encontrado
    }
    done(null, user);
  } catch (error) {
    console.error("Error during deserialization:", error);
    done(error);
  }
});

/** REGISTER */
passport.use(
  "register",
  new localStrategy(
    {
      /**Por default espera un username y un password.
       * Pero se pueden cambiar los nombres de los campos con usernameField y passwordField
       */
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true, //Para que el callback reciba el req completo,
    },
    async (req, email, password, done) => {
      // done es un callback que se ejecuta cuando termina la funcion
      const usuarioSaved = await userService.getUserByEmail({ email });
      if (usuarioSaved) {
        return done(null, false, {
          message: "Error. Bad request. Email already registered",
        });
      } else {
        const hashPass = await encryptPassword(password);
        const newUser = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: hashPass,
        };
        const userCreated = await userService.create(newUser);

        return done(null, userCreated, {
          message: "User created successfully",
        });
      }
    }
  )
);
/** LOGIN */

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true, //Para que el callback reciba el req completo
    },
    async (req, email, password, done) => {
      // done es un callback que se ejecuta cuando termina la funcion
      // dejar el req porque se envia al controller
      console.log("1-passport login");
      const user = await userService.getUserByEmail({ email });

      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const isValidPassword = await comparePassword(password, user.password);
      if (!isValidPassword) {
        return done(null, false, { message: "Wrong password" });
      }
      return done(null, user, { message: "Logged in successfully" });
    }
  )
);

/** LOGOUT */

/** CONFIG */
const passportInitialize = passport.initialize();
const passportSession = passport.session(); // passport usa sesiones para autenticar

export { passportInitialize, passportSession };
