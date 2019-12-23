import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpoonsService } from './spoons.service';
import { Spoon } from './interface/spoon.interface';
import { CreateSpoonDto } from './dto/create-spoon.dto';
import { SpoonInput } from './inputs/spoon.input';

@Resolver()
export class SpoonsResolver {
  constructor(private spoonsService: SpoonsService) {}

  @Query(() => String)
  async helloSpoons() {
    return 'hello spoon';
  }

  @Query(() => [CreateSpoonDto])
  async readAllSpoons(): Promise<Spoon[]> {
    return this.spoonsService.readAllSpoons();
  }

  @Mutation(() => CreateSpoonDto)
  async createSpoon(@Args('input') input: SpoonInput): Promise<Spoon> {
    return this.spoonsService.createSpoon(input);
  }
}
