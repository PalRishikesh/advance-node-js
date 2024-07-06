const { createLogger, format, transports, } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  
const youtubeLogger = ()=>{
    return  createLogger({
        level: 'info',
        format: combine(
            timestamp(),
            myFormat
          ),
        transports: [
        new transports.Console(),
        new transports.File({filename:"serverError.log"})
        ],
      });
}

module.exports = youtubeLogger;
