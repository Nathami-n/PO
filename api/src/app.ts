//global imports
import {createServer} from 'http';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {delegateFunction} from '../config/cors-config';


//app
const app = express();

//middleware
app.use(express.json());
app.use(cors(delegateFunction));

