import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { WorkExperienceService } from "./work-experience.service";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";
import { IWorkExperiencePayload } from "./interface/work-experience";

@Controller("work-experience")
export class WorkExperienceController {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Post("/saveWorkExperience")
  saveWorkExperience(
    @Body()
    createWorkExperienceDto: IWorkExperiencePayload
  ) {
    const _startDate = new Date(createWorkExperienceDto.startDate);
    const _endDate = new Date(createWorkExperienceDto.endDate);
    return this.workExperienceService.saveWorkExperience({
      ...createWorkExperienceDto,
      startDate: _startDate,
      endDate: _endDate
    });
  }

  @Get()
  getAllWorkExperience() {
    return this.workExperienceService.getAllWorkExperience();
  }

  @Get(":id")
  getIdWorkExperience(@Param("id") id: string) {
    const _id = Number(id);
    return this.workExperienceService.getIdWorkExperience(_id);
  }

  @Post("/updateWorkExperience")
  updateWorkExperience(
    @Body() updateWorkExperienceDto: UpdateWorkExperienceDto
  ) {
    const _startDate = new Date(updateWorkExperienceDto.startDate);
    const _endDate = new Date(updateWorkExperienceDto.endDate);

    return this.workExperienceService.updateWorkExperience({
      ...updateWorkExperienceDto,
      startDate: _startDate,
      endDate: _endDate
    });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workExperienceService.remove(+id);
  }
}
