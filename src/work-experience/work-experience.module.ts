import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceController } from './work-experience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkExperience } from './entities/work-experience.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
  imports: [TypeOrmModule.forFeature([WorkExperience])],
  exports: [TypeOrmModule],
})
export class WorkExperienceModule {}
