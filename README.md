
# Jheer Sales Tracking and Management System

This project implements a **Sales Tracking and Management System** using **NestJS** and **GraphQL**. It includes features such as **CRUD** operations with support for **soft delete** to avoid removing records physically from the database, making it possible to retain data for auditing or recovery purposes.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [GraphQL Setup](#graphql-setup)
  - [Soft Delete Implementation](#soft-delete-implementation)
- [Database Setup](#database-setup)
- [How to Use](#how-to-use)
  - [Querying Sales Types](#querying-sales-types)
  - [Creating Sales Type](#creating-sales-type)
  - [Updating Sales Type](#updating-sales-type)
  - [Soft Deleting Sales Type](#soft-deleting-sales-type)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Introduction

This project provides a backend API to manage **Jheer Sales Billing**. The API is built with **NestJS** and **GraphQL**, where the data is stored in a relational database (using **TypeORM**). 

The key feature of this system is **soft deletion**, which involves setting a `deletedAt` timestamp instead of removing data from the database. This ensures that deleted records are retained in the database for auditing purposes, but are excluded from normal queries.

## Technologies Used

- **NestJS**: A framework for building scalable server-side applications with TypeScript.
- **GraphQL**: A query language for APIs, allowing clients to request specific fields and get only what they need.
- **TypeORM**: An ORM for TypeScript and JavaScript, which enables interaction with the relational database.
- **PostgreSQL**: The database used to store the Sales Types and related information.

## Project Setup

Follow the steps below to set up the project on your local machine.

### 1. Install Node.js

Ensure that you have **Node.js** installed (version `>= 16.x`).

You can download and install it from [here](https://nodejs.org/).

### 2. Clone the Repository

```bash
git clone https://github.com/Volk-Innovatives/jheer.git
cd jheer_backend
```

### 3. Install Dependencies

```bash
npm install
```
### 4. Run Docker compose
Make sure docker compose file exist and run the docker:
```bash
docker-compose up
```

### 5. Set Up Database

Make sure your PostgreSQL database is running. You can use Docker to run PostgreSQL locally:

```bash
docker run --name sales-type-db -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=sales_type -p 5432:5432 -d postgres
```

### 6. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
DB_USER=your_db_user
DB_PASSWORD=db_password
DB_HOST=localhost 
DB_NAME=your_db,
PORT=3000
```

### 7. Run the Application

```bash
npm run start:dev
```

This will start the application in **development mode**.

## GraphQL Setup

Let's create sales type module, controller, resolver and entity to interact with our newly connected database.

nest g module sales-type && nest g service sales-type && nest g resolver sales-type

The above command will generate the users module, service and resolver and update the app.module.ts with the sales type module.

Add the salesType entity code mentioned below inside the sales-type.entity.ts file and restart your development server to create the sales type table in the database.

### Soft Delete Implementation

In this project, we implement a **soft delete** by adding a `deletedAt` field to the **SalesType** entity. Instead of permanently removing records, we set this field to the current timestamp when a record is deleted. This ensures that deleted records are retained in the database for auditing purposes, but are excluded from normal queries.

#### SalesType Entity

```typescript
@Entity('sales_type')
export class SalesType {
  @Field() 
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  deletedAt: Date; // Soft delete field
}
```

### Service Implementation

In the `SalesTypeService`, the `delete` method updates the `deletedAt` field instead of removing the record from the database:

```typescript
async delete(id: number): Promise<string> {
  const salesType = await this.salesTypeRepository.findOne({ where: { id } });

  if (!salesType) {
    throw new Error("Sales Type not found");
  }

  // Soft delete by setting `deletedAt`
  salesType.deletedAt = new Date();
  await this.salesTypeRepository.save(salesType);

  return 'Sales type successfully deleted';
}
```

### Resolver for Soft Delete

In the `SalesTypeResolver`, the `deleteSalesType` mutation calls the service method and returns a success message:

```typescript
@Mutation(() => String, { name: 'deleteSalesType' })
async deleteSalesType(@Args('id', { type: () => Int }) id: number): Promise<string> {
  return this.salesTypeService.delete(id);
}
```

## Database Setup

- Ensure your database is configured correctly in `.env`.
- The `SalesType` entity is connected to a PostgreSQL database and has fields like `id`, `name`, `createdAt`, and `deletedAt`.
- Soft delete logic is handled through the `deletedAt` field, which marks records as deleted without physically removing them.

## How to Use

### Querying Sales Types

To query all non-deleted Sales Types, use the following query:

```graphql
query {
  getAllSalesTypes {
    id
    name
    createdAt
    deletedAt
  }
}
```

### Creating Sales Type

To create a new Sales Type:

```graphql
mutation {
  createSalesType(createSalesTypeInput: { name: "New Sales Type" }) {
    id
    name
    createdAt
  }
}
```

### Updating Sales Type

To update an existing Sales Type:

```graphql
mutation {
  updateSalesType(id: 1, updateSalesTypeInput: { name: "Updated Sales Type" }) {
    id
    name
    createdAt
  }
}
```

### Soft Deleting Sales Type

To perform a soft delete:

```graphql
mutation {
  deleteSalesType(id: 1)
}
```

This will set the `deletedAt` field to the current timestamp.

## Troubleshooting

### 1. **Error: Cannot return null for non-nullable field**
Ensure that you handle cases where data might be missing, such as checking for soft-deleted records when querying or returning `null` for certain fields.

### 2. **Database Connection Issues**
Make sure the database is running and the connection details are correctly configured in the `.env` file.

## Contributing

If you'd like to contribute to this project, please fork the repository, create a new branch, and submit a pull request with your changes.

