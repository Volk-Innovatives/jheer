import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        try {
          const dataSource = new DataSource({
            type: 'postgres',
            host: config.get<string>('DB_HOST'),
            port: parseInt(config.get<string>('DB_PORT', '5432')),
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_NAME'),
            synchronize: true,
            entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
          });
          await dataSource.initialize();
          console.log('Database connected successfully');
          return dataSource;
        } catch (error) {
          console.log('Error connecting to database');
          throw error;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
