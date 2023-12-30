"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkExperienceController = void 0;
const common_1 = require("@nestjs/common");
const work_experience_service_1 = require("./work-experience.service");
const update_work_experience_dto_1 = require("./dto/update-work-experience.dto");
let WorkExperienceController = class WorkExperienceController {
    constructor(workExperienceService) {
        this.workExperienceService = workExperienceService;
    }
    saveWorkExperience(createWorkExperienceDto) {
        const _startDate = new Date(createWorkExperienceDto.startDate);
        const _endDate = new Date(createWorkExperienceDto.endDate);
        return this.workExperienceService.saveWorkExperience({
            ...createWorkExperienceDto,
            startDate: _startDate,
            endDate: _endDate,
        });
    }
    getAllWorkExperience() {
        return this.workExperienceService.getAllWorkExperience();
    }
    getIdWorkExperience(id) {
        const _id = Number(id);
        return this.workExperienceService.getIdWorkExperience(_id);
    }
    updateWorkExperience(updateWorkExperienceDto) {
        return this.workExperienceService.updateWorkExperience(updateWorkExperienceDto);
    }
    remove(id) {
        return this.workExperienceService.remove(+id);
    }
};
exports.WorkExperienceController = WorkExperienceController;
__decorate([
    (0, common_1.Post)('/saveWorkExperience'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkExperienceController.prototype, "saveWorkExperience", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkExperienceController.prototype, "getAllWorkExperience", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkExperienceController.prototype, "getIdWorkExperience", null);
__decorate([
    (0, common_1.Post)('/updateWorkExperience'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_work_experience_dto_1.UpdateWorkExperienceDto]),
    __metadata("design:returntype", void 0)
], WorkExperienceController.prototype, "updateWorkExperience", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkExperienceController.prototype, "remove", null);
exports.WorkExperienceController = WorkExperienceController = __decorate([
    (0, common_1.Controller)('work-experience'),
    __metadata("design:paramtypes", [work_experience_service_1.WorkExperienceService])
], WorkExperienceController);
//# sourceMappingURL=work-experience.controller.js.map