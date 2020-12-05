import { Controller } from '@nestjs/common';

@Controller()
export class AppController {

  // constructor(private authService: AuthService){}

  // @Post('auth/login')
  // async login(@Body() user:IUser) {    
    
  //   return this.authService.login(user)
  // }
  // // @Body(new ParseArrayPipe({ items: CreateUserDto })) //чтоб принимать масивы - юзать парс арай
  // @UseGuards(JwtAuthGuard)
  // @Get('user')
  // async user(@Request() req){
  //   return req.user
  // }
}