"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkExperienceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_work_experience_dto_1 = require("./create-work-experience.dto");
class UpdateWorkExperienceDto extends (0, mapped_types_1.PartialType)(create_work_experience_dto_1.CreateWorkExperienceDto) {
}
exports.UpdateWorkExperienceDto = UpdateWorkExperienceDto;
//# sourceMappingURL=update-work-experience.dto.js.map