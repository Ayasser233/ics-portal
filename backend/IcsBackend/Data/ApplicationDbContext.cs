using Microsoft.EntityFrameworkCore;
using IcsBackend.Features.Inquiries.Models;

namespace IcsBackend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    // DbSets
    public DbSet<ContactInquiry> ContactInquiries { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Configure ContactInquiry entity
        modelBuilder.Entity<ContactInquiry>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Type).IsRequired();
            entity.Property(e => e.FullName).IsRequired().HasMaxLength(150);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.CompanyName).HasMaxLength(255);
            entity.Property(e => e.PositionNeeded).HasMaxLength(255);
            entity.Property(e => e.Message).HasMaxLength(2000);
            entity.Property(e => e.CvUrl).HasMaxLength(500);
            entity.Property(e => e.IsProcessed).HasDefaultValue(false);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("NOW()");
            
            entity.HasIndex(e => e.Email);
            entity.HasIndex(e => e.CreatedAt);
            entity.HasIndex(e => e.Type);
        });
    }
}
