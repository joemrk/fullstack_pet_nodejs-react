import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Ctx } from "src/users/decorators/context.decorator";
import { UserInput } from "src/users/dto/user.input";
import { UserResponse } from "src/users/entities/user-response.entity";
import { AuthService } from './auth.service';
import { TokenResponse } from "./entities/token-response.entity";


@Resolver()
export class AuthResolver{

  constructor(
    private readonly authService: AuthService,
  ) { }


  @Mutation(() => TokenResponse)
  async registration(@Args('input') input: UserInput) {
    return await this.authService.register(input)
  }

  @Mutation(() => TokenResponse)
  async login(@Args('input') input: UserInput) {
    return await this.authService.login(input)
  }

  @Query(() => UserResponse)
  async me(@Ctx() ctx) {
    const token = ctx.headers.authorization.split(' ')[1]
    if(token) return this.authService.me(token)
    else return {errors: ['Unauthorized']}
  }
}