const apiResponse = (status, message, data) => {
  if (status >= 400 && status <= 511) {
    return {
      status,
      message,
      errors: data,
    };
  }

  return {
    status,
    message,
    data,
  };
};

export default apiResponse;
