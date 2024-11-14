import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentInput: CreateStudentInput)
  // : Promise<Student> 
  {
    const {name, email, clubs} = createStudentInput;
    
    return await this.prisma.student.create({
      data: {
        name,
        email
      }
    })
  }

  async findAll(): Promise<Student[]>{
    return await this.prisma.student.findMany({
      include: { clubs: true }
    });
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({where: {id}});
  }



  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
