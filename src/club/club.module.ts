import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubResolver } from './club.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClubResolver, ClubService, PrismaService],
})
export class ClubModule {}
