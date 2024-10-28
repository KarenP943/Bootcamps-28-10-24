import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';
import {BootcampsModule} from './bootcamps/bootcamps.module';
import {TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsModule } from './reviews/reviews.module';
@Module({
  imports: [
    BootcampsModule,
    TypeOrmModule.forRoot({
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
      debug:true
    }),
    ReviewsModule,
  ],
  controllers: [AppController, BootcampsController, CoursesController, UsersController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
