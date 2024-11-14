import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
