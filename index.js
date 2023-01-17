import express from 'express';
import authRouter from './routes/auth.js';
import cors from 'cors';
import config from './config/app.js';
import routerProfilePic from './routes/user.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(authRouter);
app.use(routerProfilePic);

app.listen(config.APP_PORT, () => {
    console.log(`Server Activated On Port ${config.APP_PORT}`);
})