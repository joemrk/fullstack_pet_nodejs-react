import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import {tap} from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {    
    const now = Date.now()
    return next.handle().pipe(tap(()=>console.log(`:[${Date.now() - now}ms]`)))
  }
}