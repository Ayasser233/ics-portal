using IcsBackend.Data;
using IcsBackend.Core.Middleware;
using IcsBackend.Features.Inquiries.Repositories;
using Microsoft.EntityFrameworkCore;
using Asp.Versioning;
using IcsBackend.Features.Inquiries.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure URLs based on environment
var urls = builder.Configuration.GetSection("Urls").Get<string[]>();
if (urls != null && urls.Length > 0)
{
    builder.WebHost.UseUrls(urls);
}

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Add API Versioning
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = ApiVersionReader.Combine(
        new UrlSegmentApiVersionReader(),
        new HeaderApiVersionReader("x-api-version"),
        new QueryStringApiVersionReader("api-version")
    );
}).AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

// Add DbContext with PostgreSQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IInquiryService, InquiryService>();
builder.Services.AddScoped<IInquiryMapper, InquiryMapper>();

// Register repositories
builder.Services.AddScoped<IInquiryRepository, InquiryRepository>();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        var allowedOrigins = builder.Environment.IsDevelopment()
            ? new[] { "http://localhost:4200", "http://localhost:4201" }
            : new[] { "https://yourdomain.com" };
            
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod()
              .WithExposedHeaders("x-api-version");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
