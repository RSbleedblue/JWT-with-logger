const customLogger = (req,res,next)=>{
    console.log(`This is custom logger: ${new Date().toISOString()} ${req.method} ${req.url} `);
    next();
}
export default customLogger;