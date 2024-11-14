import { Injectable } from '@nestjs/common';
import { CreateClubInput } from './dto/create-club.input';
import { UpdateClubInput } from './dto/update-club.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubService {
  constructor(private prisma: PrismaService) {}

  create(createClubInput: CreateClubInput) {
    // const {name} = createClubInput;
    // return this.prisma.club.create({
    //   data: {
    //     name
    //   }
    // });
  }

  async findAll()
  // : Promise<Club[]> 
  {
    return this.prisma.club.findMany({
      include: { teacher: true, students: true }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} club`;
  }

  update(id: number, updateClubInput: UpdateClubInput) {
    return `This action updates a #${id} club`;
  }

  remove(id: number) {
    return `This action removes a #${id} club`;
  }
}
