import { WorkExperienceService } from "./work-experience.service";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";
import { IWorkExperiencePayload } from "./interface/work-experience";
export declare class WorkExperienceController {
    private readonly workExperienceService;
    constructor(workExperienceService: WorkExperienceService);
    saveWorkExperience(createWorkExperienceDto: IWorkExperiencePayload): Promise<CreateWorkExperienceDto & import("./entities/work-experience.entity").WorkExperience>;
    getAllWorkExperience(): Promise<import("./entities/work-experience.entity").WorkExperience[]>;
    getIdWorkExperience(id: string): Promise<import("./entities/work-experience.entity").WorkExperience>;
    updateWorkExperience(updateWorkExperienceDto: UpdateWorkExperienceDto): Promise<UpdateWorkExperienceDto & import("./entities/work-experience.entity").WorkExperience>;
    remove(id: string): Promise<void>;
}
