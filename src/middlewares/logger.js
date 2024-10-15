
const logger = (req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    res.on('finish', () => {
      console.log(`Response Status: ${res.statusCode}`);
    });
    next();
  };

  export default logger;
