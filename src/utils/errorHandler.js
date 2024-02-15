// Custom middleware de manejo de errores
export const errorHandler = (err, req, res, next) => {
  //console.error(err.stack);
  const statusCode = err.status || 500;
  let errorMessage;

  switch (statusCode) {
    case 400:
      errorMessage =
        "Bad Request: The server could not understand the request.";
      break;
    case 401:
      errorMessage =
        "Unauthorized: Authentication is required and has failed or has not been provided.";
      break;
    case 403:
      errorMessage =
        "Forbidden: The server understood the request, but refuses to authorize it.";
      break;
    case 404:
      errorMessage =
        "Not Found: The requested resource could not be found on the server.";
      break;
    case 500:
    default:
      errorMessage =
        "Internal Server Error: Something went wrong on the server.";
      break;
  }

  res.status(statusCode).send("error", { errorMessage });
};
