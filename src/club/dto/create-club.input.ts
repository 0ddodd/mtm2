import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClubInput {
  @Field()
  name: string;

  @Field()
  teacherName: string;
}
