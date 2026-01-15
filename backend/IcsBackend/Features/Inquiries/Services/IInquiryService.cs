using IcsBackend.Features.Inquiries.DTOs;
using IcsBackend.Features.Inquiries.Models;

namespace IcsBackend.Features.Inquiries.Services;

/// Service interface for inquiry business logic
public interface IInquiryService
{
    Task<IEnumerable<InquiryResponseDto>> GetAllInquiriesAsync();
    Task<InquiryResponseDto> GetInquiryByIdAsync(int id);
    Task<IEnumerable<InquiryResponseDto>> GetInquiriesByTypeAsync(InquiryType type);
    Task<IEnumerable<InquiryResponseDto>> GetUnprocessedInquiriesAsync();
    Task<InquiryResponseDto> CreateInquiryAsync(CreateInquiryDto dto);
    Task<InquiryResponseDto> UpdateInquiryAsync(int id, UpdateInquiryDto dto);
    Task DeleteInquiryAsync(int id);
}
