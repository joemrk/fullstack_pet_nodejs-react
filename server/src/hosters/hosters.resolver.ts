import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HostersService } from './hosters.service';
import { HosterEntity } from './entities/hoster.entity';
import { HosterInput } from './dto/hoster.input';

@Resolver(() => HosterEntity)
export class HostersResolver {
  constructor(private readonly hostersService: HostersService) {}

  @Mutation(() => HosterEntity)
  createHoster(@Args('createHosterInput') createHosterInput: HosterInput) {
    return this.hostersService.create(createHosterInput);
  }

  @Query(() => [HosterEntity], { name: 'hosters' })
  hosters() {
    return this.hostersService.findAll();
  }

  @Query(() => HosterEntity, { name: 'hoster' })
  hoster(@Args('id', { type: () => String }) id: string) {
    return this.hostersService.findOne(id);
  }

  // @Mutation(() => Hoster)
  // updateHoster(@Args('updateHosterInput') updateHosterInput: HosterInput) {
  //   return this.hostersService.update(updateHosterInput.id, updateHosterInput);
  // }

  @Mutation(() => HosterEntity)
  removeHoster(@Args('id', { type: () => Int }) id: number) {
    return this.hostersService.remove(id);
  }
}
