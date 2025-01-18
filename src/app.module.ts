import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SalesTypeModule } from './sales-type/sales-type.module';
import { TypeOrmModule } from './datasource/typeorm.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: (process.cwd(), 'src/schema.gql'), // Automatically generates the schema
      playground: true,
    }),
    TypeOrmModule,
    SalesTypeModule,
  ],
})
export class AppModule {}