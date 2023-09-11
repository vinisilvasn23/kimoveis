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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const schedules_entity_1 = __importDefault(require("./schedules.entity"));
const addressers_entity_1 = __importDefault(require("./addressers.entity"));
const categories_entity_1 = __importDefault(require("./categories.entity"));
let RealEstate = class RealEstate {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], RealEstate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], RealEstate.prototype, "sold", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Object)
], RealEstate.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], RealEstate.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", String)
], RealEstate.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", String)
], RealEstate.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => schedules_entity_1.default, (schedule) => schedule.realEstate),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RealEstate.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => addressers_entity_1.default),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", addressers_entity_1.default)
], RealEstate.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.default, (categories) => categories.realEstate),
    __metadata("design:type", categories_entity_1.default)
], RealEstate.prototype, "category", void 0);
RealEstate = __decorate([
    (0, typeorm_1.Entity)("realEstates")
], RealEstate);
exports.default = RealEstate;
