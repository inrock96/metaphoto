import express, { Request,Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import photoRoutes from './routes/photo.routes';
const app = express()

const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://isamayoa-test.s3-website.us-east-2.amazonaws.com'
}));

app.use(morgan('tiny'))
app.use('/externalapi',photoRoutes)
app.get('/',(req:Request,res:Response)=>{res.send("Photo")});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
 