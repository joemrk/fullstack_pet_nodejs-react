import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IJwtToken } from "./interfaces/jwt-token.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    }) 
  }

  async validate(payload: IJwtToken){
    //Passport построит userобъект на основе возвращаемого значения  и прикрепит его как свойство к Requestобъекту.
    return {
      userId: payload.sub, username: payload.username
    }
  }
}