using System.ComponentModel.DataAnnotations;
using IcsBackend.Core.Models;

namespace IcsBackend.Features.Inquiries.Models;

public class ContactInquiry : BaseEntity
{
    [Required]
    public InquiryType Type { get; set; }

    [Required, MaxLength(150)]
    public string FullName { get; set; } = string.Empty;

    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    [MaxLength(20)]
    public string? Phone { get; set; }

    // Optional – based on type
    public string? CompanyName { get; set; }
    public string? PositionNeeded { get; set; } // Company

    public string? Message { get; set; } // Client

    public string? CvUrl { get; set; } // Applicant
    
    public bool IsProcessed { get; set; } = false;
}
