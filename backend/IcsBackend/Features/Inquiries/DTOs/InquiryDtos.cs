using IcsBackend.Features.Inquiries.Models;

namespace IcsBackend.Features.Inquiries.DTOs;

public class CreateInquiryDto
{
    public InquiryType Type { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? CompanyName { get; set; }
    public string? PositionNeeded { get; set; }
    public string? Message { get; set; }
    public string? CvUrl { get; set; }
}

public class UpdateInquiryDto
{
    public bool IsProcessed { get; set; }
}

public class InquiryResponseDto
{
    public int Id { get; set; }
    public InquiryType Type { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? CompanyName { get; set; }
    public string? PositionNeeded { get; set; }
    public string? Message { get; set; }
    public string? CvUrl { get; set; }
    public DateTime CreatedAt { get; set; }
    public bool IsProcessed { get; set; }
}
