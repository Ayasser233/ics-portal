# ICS Backend - Feature-Based Architecture

## Project Structure

```
IcsBackend/
├── Core/                           # Shared/Core functionality
│   ├── Exceptions/                 # Global exception classes
│   │   └── CustomExceptions.cs
│   ├── Middleware/                 # Global middleware
│   │   └── ExceptionHandlingMiddleware.cs
│   └── Models/                     # Shared base models
│       └── BaseEntity.cs
│
├── Features/                       # Feature-based modules
│   └── Inquiries/                  # Inquiry feature module
│       ├── Controllers/
│       │   └── InquiriesController.cs
│       ├── DTOs/
│       │   └── InquiryDtos.cs
│       ├── Models/
│       │   ├── ContactInquiry.cs
│       │   └── InquiryType.cs
│       └── Repositories/
│           ├── IInquiryRepository.cs
│           └── InquiryRepository.cs
│
├── Data/                           # Database context
│   └── ApplicationDbContext.cs
│
├── Properties/
│   └── launchSettings.json
│
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
└── IcsBackend.csproj
```

## Architecture Benefits

### Feature-Based Organization
- **Cohesion**: Related code stays together (controller, DTOs, models, repositories)
- **Scalability**: Easy to add new features without cluttering the root
- **Maintainability**: Clear boundaries between features
- **Team Collaboration**: Different teams can work on different features independently

### Core Layer
Contains shared functionality used across multiple features:
- **Exceptions**: Custom exception types
- **Middleware**: Global middleware components
- **Models**: Base entities and shared models

## Adding a New Feature

To add a new feature (e.g., "Users"):

1. Create feature folder structure:
```bash
mkdir -p Features/Users/{Controllers,DTOs,Models,Repositories,Services}
```

2. Add your feature files with proper namespaces:
   - Controllers: `IcsBackend.Features.Users.Controllers`
   - DTOs: `IcsBackend.Features.Users.DTOs`
   - Models: `IcsBackend.Features.Users.Models`
   - Repositories: `IcsBackend.Features.Users.Repositories`

3. Register services in `Program.cs`:
```csharp
builder.Services.AddScoped<IUserRepository, UserRepository>();
```

## Current Features

### Inquiries Feature
Handles contact inquiries with three types:
- **Company**: Request for positions
- **Client**: Service inquiries
- **Applicant**: Job applications

**Endpoints:**
- `GET /api/inquiries` - Get all inquiries
- `GET /api/inquiries/{id}` - Get inquiry by ID
- `GET /api/inquiries/type/{type}` - Get inquiries by type
- `GET /api/inquiries/unprocessed` - Get unprocessed inquiries
- `POST /api/inquiries` - Create new inquiry
- `PATCH /api/inquiries/{id}` - Update inquiry status
- `DELETE /api/inquiries/{id}` - Delete inquiry

## Database

- **Provider**: PostgreSQL with Npgsql
- **ORM**: Entity Framework Core 9.0
- **Migrations**: Entity Framework migrations in `Migrations/` folder

### Connection Strings
- Development: `ics_portal_dev` database
- Production: `ics_portal` database

## Running the Project

```bash
# Restore packages
dotnet restore

# Build
dotnet build

# Run
dotnet run

# Create migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update
```

## Technology Stack

- .NET 9.0
- ASP.NET Core Web API
- Entity Framework Core 9.0
- PostgreSQL (Npgsql)
- OpenAPI/Swagger
