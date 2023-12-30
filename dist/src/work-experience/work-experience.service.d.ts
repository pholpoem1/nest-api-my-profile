import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { WorkExperience } from './entities/work-experience.entity';
import { Repository } from 'typeorm';
export declare class WorkExperienceService {
    private workExperienceRepository;
    constructor(workExperienceRepository: Repository<WorkExperience>);
    saveWorkExperience(createWorkExperienceDto: CreateWorkExperienceDto): Promise<CreateWorkExperienceDto & WorkExperience>;
    getAllWorkExperience(): Promise<WorkExperience[]>;
    getIdWorkExperience(id: number): Promise<WorkExperience | null>;
    updateWorkExperience(data: UpdateWorkExperienceDto): Promise<UpdateWorkExperienceDto & WorkExperience>;
    remove(id: number): Promise<void>;
}
