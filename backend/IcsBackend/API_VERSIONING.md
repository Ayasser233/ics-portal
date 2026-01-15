# API Versioning Guide

## Overview

The ICS Backend API implements versioning using the `Asp.Versioning` package, supporting multiple versioning strategies.

## Configuration

### Current Version

- **Current API Version**: v1.0
- **Default Version**: v1.0 (applied when no version is specified)

### URL Configuration

#### Development Environment

- HTTP: `http://localhost:5100`
- HTTPS: `https://localhost:5101`
- Database: `ics_portal_dev`

#### Production Environment

- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`
- Database: `ics_portal_db`

## API Endpoints

### Version 1.0 - Inquiries

All inquiry endpoints are prefixed with `/api/v1/inquiries`:

```
GET    /api/v1/inquiries              - Get all inquiries
GET    /api/v1/inquiries/{id}         - Get inquiry by ID
GET    /api/v1/inquiries/type/{type}  - Get inquiries by type
GET    /api/v1/inquiries/unprocessed  - Get unprocessed inquiries
POST   /api/v1/inquiries              - Create new inquiry
PATCH  /api/v1/inquiries/{id}         - Update inquiry status
DELETE /api/v1/inquiries/{id}         - Delete inquiry
```

## Versioning Strategies

The API supports three ways to specify the version:

### 1. URL Segment (Recommended)

```bash
GET https://localhost:5101/api/v1/inquiries
```

### 2. Query String

```bash
GET https://localhost:5101/api/inquiries?api-version=1.0
```

### 3. Header

```bash
GET https://localhost:5101/api/inquiries
x-api-version: 1.0
```

## Testing Examples

### cURL Examples

**Get all inquiries (Development):**

```bash
curl -X GET "http://localhost:5100/api/v1/inquiries"
```

**Create inquiry:**

```bash
curl -X POST "http://localhost:5100/api/v1/inquiries" \
  -H "Content-Type: application/json" \
  -d '{
    "type": 1,
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "Inquiry message"
  }'
```

**Using query string version:**

```bash
curl -X GET "http://localhost:5100/api/inquiries?api-version=1.0"
```

**Using header version:**

```bash
curl -X GET "http://localhost:5100/api/inquiries" \
  -H "x-api-version: 1.0"
```

### Frontend Integration

**Angular/TypeScript Example:**

```typescript
// environment.development.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5100/api/v1'
};

// environment.ts
export const environment = {
  production: true,
  apiUrl: 'http://localhost:5000/api/v1'
};

// inquiry.service.ts
@Injectable()
export class InquiryService {
  private apiUrl = environment.apiUrl;
  
  getInquiries() {
    return this.http.get(`${this.apiUrl}/inquiries`);
  }
  
  createInquiry(data: CreateInquiryDto) {
    return this.http.post(`${this.apiUrl}/inquiries`, data);
  }
}
```

## Adding New Versions

### Create v2.0 Controller

```csharp
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace IcsBackend.Features.Inquiries.Controllers;

[ApiController]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class InquiriesV2Controller : ControllerBase
{
    // New implementation for v2.0
}
```

### Support Multiple Versions

```csharp
[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class InquiriesController : ControllerBase
{
    [HttpGet]
    [MapToApiVersion("1.0")]
    public async Task<IActionResult> GetAllV1()
    {
        // Version 1.0 implementation
    }
    
    [HttpGet]
    [MapToApiVersion("2.0")]
    public async Task<IActionResult> GetAllV2()
    {
        // Version 2.0 implementation
    }
}
```

## Deprecation Strategy

When deprecating an old version:

1. Mark the version as deprecated:

```csharp
[ApiVersion("1.0", Deprecated = true)]
[ApiVersion("2.0")]
```

2. Update API responses to include deprecation warning in headers

3. Document the deprecation timeline

4. Provide migration guide for clients

## Version Response Headers

The API includes version information in response headers:

- `api-supported-versions`: Lists all supported versions
- `api-deprecated-versions`: Lists deprecated versions

## CORS Configuration

CORS is configured per environment:

- **Development**: `http://localhost:4200`, `http://localhost:4201`
- **Production**: Configure with your production domain

## Best Practices

1. **Always use URL segment versioning** for clarity
2. **Test new versions** before deprecating old ones
3. **Maintain backward compatibility** when possible
4. **Document breaking changes** clearly
5. **Give clients advance notice** of deprecations (90 days recommended)

## Troubleshooting

### Issue: Version not recognized

- Ensure version format is correct (1.0, not 1 or v1)
- Check if controller has `[ApiVersion]` attribute
- Verify route template includes `{version:apiVersion}`

### Issue: CORS errors

- Check allowed origins in Program.cs
- Ensure frontend is using correct URL
- Verify CORS middleware is before UseAuthorization

### Issue: Different URL in dev/prod

- Check which environment is running
- Verify appsettings.{Environment}.json is loaded
- Use `dotnet run --environment Development` to force environment
