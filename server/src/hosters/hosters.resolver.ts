import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HostersService } from './hosters.service';
import { Hoster } from './entities/hoster.entity';
import { HosterInput } from './dto/hoster.input';

@Resolver(() => Hoster)
export class HostersResolver {
  constructor(private readonly hostersService: HostersService) {}

  @Mutation(() => Hoster)
  createHoster(@Args('createHosterInput') createHosterInput: HosterInput) {
    return this.hostersService.create(createHosterInput);
  }

  @Query(() => [Hoster], { name: 'hosters' })
  findAll() {
    return this.hostersService.findAll();
  }

  @Query(() => Hoster, { name: 'hoster' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hostersService.findOne(id);
  }

  // @Mutation(() => Hoster)
  // updateHoster(@Args('updateHosterInput') updateHosterInput: HosterInput) {
  //   return this.hostersService.update(updateHosterInput.id, updateHosterInput);
  // }

  @Mutation(() => Hoster)
  removeHoster(@Args('id', { type: () => Int }) id: number) {
    return this.hostersService.remove(id);
  }
}
