import app from './index.js';
import connectDb from './util/ConnectDb.js';

await connectDb;
app.listen(9999,()=>{
    console.log("Connection established with mongo DB");
    console.log("Server is up and running at 9999");
})