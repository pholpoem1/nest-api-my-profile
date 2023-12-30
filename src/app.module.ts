import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WorkExperienceModule } from "./work-experience/work-experience.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkExperience } from "./work-experience/entities/work-experience.entity";
import { DataSource } from "typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "src/config/configuration";
import databaseConfig from "./config/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: [`.env.${process.env.NODE_ENV}`]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ...(await configService.get("database"))
      }),
      inject: [ConfigService]
    }),
    // TypeOrmModule.forRoot({

    //   type: "mysql",
    //   host: "localhost",
    //   port: 3306,
    //   username: "root",
    //   password: "Qawsed@1234",
    //   database: "my_profile",
    //   entities: [WorkExperience],
    //   synchronize: true,
    //   autoLoadEntities: true
    // }),
    WorkExperienceModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
