import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { SalesTypeModule } from './sales-type/sales-type.module';
import { TypeOrmModule } from './datasource/typeorm.module';
import { PaymentModeModule } from './payment-mode/payment-mode.module';
import { StaffAdvanceModule } from './staff-advance/staff-advance.module';
import { StaffModule } from './staff/staff.module';
import { VendorModule } from './vendor/vendor.module';
import { ExpenseModule } from './expense/expense.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: (process.cwd(), 'src/schema.gql'), // Automatically generates the schema
      playground: true,
    }),
     ConfigModule.forRoot({
      isGlobal: true, // Makes env variables available app-wide
    }),
    TypeOrmModule,
    SalesTypeModule,
    PaymentModeModule,
    StaffAdvanceModule,
    StaffModule,
    VendorModule,
    ExpenseModule,
    SalesModule,
  ],
})
export class AppModule {}