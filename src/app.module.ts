import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesTypeModule } from './sales-type/sales-type.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Automatically generates the schema
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jheer_sales',
      password: 'jheer_sales',
      database: 'jheer_sales_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SalesTypeModule,
  ],
})
export class AppModule {}