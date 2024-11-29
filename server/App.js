import express from 'express'
import router from './Routers/Route.js';


const app = express();


app.use(express.json()); 
app.use('/api',router);
app.listen(5000,()=>{
    console.log(`server started at 5000 port`);
    
});