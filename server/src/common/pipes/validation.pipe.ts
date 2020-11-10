import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import {plainToClass} from 'class-transformer'
import {validate} from 'class-validator'

@Injectable()
export class ValidatorPipe implements PipeTransform {
  async transform(value: any, {metatype}: ArgumentMetadata) {
    // export interface ArgumentMetadata {
    //   type: 'body' | 'query' | 'param' | 'custom';
    //   metatype?: Type<unknown>;
    //   data?: string;
    // }
    
    if(!metatype || !this.toValidate(metatype)) return value

    const object = plainToClass(metatype, value)
    const errors = await validate(object)
    if(errors.length > 0) throw new BadRequestException('Validation failed')

    return value
  }
  
  //for exclude simple js types
  private toValidate(metatype: Function): boolean{
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}