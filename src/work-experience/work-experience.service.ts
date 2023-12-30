import { Injectable } from '@nestjs/common';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkExperience } from './entities/work-experience.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectRepository(WorkExperience)
    private workExperienceRepository: Repository<WorkExperience>,
  ) {}

  async saveWorkExperience(createWorkExperienceDto: CreateWorkExperienceDto) {
    return await this.workExperienceRepository.save(createWorkExperienceDto);
  }

  async getAllWorkExperience(): Promise<WorkExperience[]> {
    return await this.workExperienceRepository.find();
  }

  async getIdWorkExperience(id: number): Promise<WorkExperience | null> {
    return await this.workExperienceRepository.findOneBy({ id });
  }

  async updateWorkExperience(data: UpdateWorkExperienceDto) {
    return await this.workExperienceRepository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.workExperienceRepository.delete(id);
  }
}
