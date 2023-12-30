declare const _default: (() => {
    type: string;
    host: string;
    port: string | number;
    database: string;
    username: string;
    password: string;
    logging: boolean;
    logger: string;
    entities: string[];
    migrationsTableName: string;
    migrations: string[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string | number;
    database: string;
    username: string;
    password: string;
    logging: boolean;
    logger: string;
    entities: string[];
    migrationsTableName: string;
    migrations: string[];
    synchronize: boolean;
}>;
export default _default;
