import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Club } from 'src/club/entities/club.entity';

@ObjectType()
export class Teacher {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [Club])
  clubs: Club[];
}
