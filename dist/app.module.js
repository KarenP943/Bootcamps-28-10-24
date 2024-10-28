"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const bootcamps_controller_1 = require("./controllers/bootcamps.controller");
const courses_controller_1 = require("./controllers/courses.controller");
const users_controller_1 = require("./controllers/users.controller");
const reviews_controller_1 = require("./controllers/reviews.controller");
const bootcamps_module_1 = require("./bootcamps/bootcamps.module");
const typeorm_1 = require("@nestjs/typeorm");
const reviews_module_1 = require("./reviews/reviews.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bootcamps_module_1.BootcampsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'bootcamps_2898754',
                entities: [],
                synchronize: true,
                autoLoadEntities: true,
                dropSchema: true,
                debug: true
            }),
            reviews_module_1.ReviewsModule,
        ],
        controllers: [app_controller_1.AppController, bootcamps_controller_1.BootcampsController, courses_controller_1.CoursesController, users_controller_1.UsersController, reviews_controller_1.ReviewsController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map