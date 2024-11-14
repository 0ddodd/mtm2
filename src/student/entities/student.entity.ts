import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Club } from 'src/club/entities/club.entity';

@ObjectType()
export class Student {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({nullable: true})
  email?: string;

  @Field(() => [Club])
  clubs: Club[];
}
