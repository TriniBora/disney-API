// This funtion recieves a response, a status, data and a message
// and returns a success response
const response = (status, data, res, msg) => {
  return res.status(status).json({
    status: status,
    data: data,
    message: msg,
  });
};

// This function recieves an error, a response and a message
// and returns an error response
const errorResponse = (err, res, msg) => {
  return res.status(err.code || 500).json({
    status: err.code || 500,
    data: null,
    message: err.message || msg,
  });
};

module.exports = { response, errorResponse };
