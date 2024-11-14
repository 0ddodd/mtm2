import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@ObjectType()
export class Club {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Student], {nullable: true})
  students?: Student[]

  @Field({nullable: true})
  teacher?: Teacher;
}
