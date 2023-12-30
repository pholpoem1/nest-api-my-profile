import { ConfigModule } from "@nestjs/config";
import databaseConfig from "src/config/database.config";

ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig],
  envFilePath: [`.env.${process.env.NODE_ENV}`]
});

export default databaseConfig();
