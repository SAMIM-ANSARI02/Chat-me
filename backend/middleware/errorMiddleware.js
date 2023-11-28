const notFound = (res, req, next) => {
  const error = new Error(`NOT FOUND-${res.orginalUrl}`);
  res.status(404);
  next(error);
};

const erroeHandler = (res, req, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, erroeHandler };
