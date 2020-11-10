import { Injectable, NestMiddleware } from "@nestjs/common";
import {Request, Response} from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
  use(req: Request, res:Response, next: Function){
    const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    console.log(`[${date}]:[${req.method}]:[${req.originalUrl}]`);
    // headers.host -> 'localhost:3000'
    // console.log(req);
    next()
  }
} 