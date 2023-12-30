import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: true,
  logger: "file",
  entities: ["./dist/**/*entity.{ts,js}"],
  migrationsTableName: "migrations",
  migrations: ["dist/**/migrations/*.{ts,js}"],
  synchronize: process.env.NODE_ENV === "local"
}));
