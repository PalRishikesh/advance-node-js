const { createLogger, format, transports, } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  
const youtubeLogger = ()=>{
    return  createLogger({
        level: 'debug',
        // format: winston.format.json(),
        format: combine(
            colorize(),
            // label({ label: 'right meow!' }),
            timestamp({
                format:"HH:mm:ss"
            }),
            myFormat
          ),
        // defaultMeta: { service: 'user-service' },
        transports: [
          //
          // - Write all logs with importance level of `error` or less to `error.log`
          // - Write all logs with importance level of `info` or less to `combined.log`
          //
        //   new winston.transports.File({ filename: 'error.log', level: 'error' }),
        //   new winston.transports.File({ filename: 'combined.log' }),
        // new winston.transports.Console()
        new transports.Console()
        ],
      });
}

module.exports = youtubeLogger;
