import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user

    return data ? user && user[data] : user
  }
)

// @Get()
// async findOne(@User() user: UserEntity) {
//   console.log(user);
// }


// @Get()
// async findOne(@User('firstName') firstName: string) {
//   console.log(`Hello ${firstName}`);
// }