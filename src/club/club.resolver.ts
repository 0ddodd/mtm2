import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClubService } from './club.service';
import { Club } from './entities/club.entity';
import { CreateClubInput } from './dto/create-club.input';
import { UpdateClubInput } from './dto/update-club.input';

@Resolver(() => Club)
export class ClubResolver {
  constructor(private readonly clubService: ClubService) {}

  @Mutation(() => Club)
  createClub(@Args('createClubInput') createClubInput: CreateClubInput) {
    return this.clubService.create(createClubInput);
  }

  @Query(() => [Club], { name: 'club' })
  findAll() {
    return this.clubService.findAll();
  }

  @Query(() => Club, { name: 'club' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clubService.findOne(id);
  }

  @Mutation(() => Club)
  updateClub(@Args('updateClubInput') updateClubInput: UpdateClubInput) {
    return this.clubService.update(updateClubInput.id, updateClubInput);
  }

  @Mutation(() => Club)
  removeClub(@Args('id', { type: () => Int }) id: number) {
    return this.clubService.remove(id);
  }
}
