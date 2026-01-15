using IcsBackend.Features.Inquiries.DTOs;
using IcsBackend.Features.Inquiries.Models;

namespace IcsBackend.Features.Inquiries.Services;

/// Mapper interface for inquiry entity/DTO conversions
public interface IInquiryMapper
{
    InquiryResponseDto ToDto(ContactInquiry entity);
    ContactInquiry ToEntity(CreateInquiryDto dto);
    void UpdateEntity(ContactInquiry entity, UpdateInquiryDto dto);
}

/// Can be extended with AutoMapper or custom logic without breaking existing code
public class InquiryMapper : IInquiryMapper
{
    public InquiryResponseDto ToDto(ContactInquiry entity)
    {
        return new InquiryResponseDto
        {
            Id = entity.Id,
            Type = entity.Type,
            FullName = entity.FullName,
            Email = entity.Email,
            Phone = entity.Phone,
            CompanyName = entity.CompanyName,
            PositionNeeded = entity.PositionNeeded,
            Message = entity.Message,
            CvUrl = entity.CvUrl,
            CreatedAt = entity.CreatedAt,
            IsProcessed = entity.IsProcessed
        };
    }

    public ContactInquiry ToEntity(CreateInquiryDto dto)
    {
        return new ContactInquiry
        {
            Type = dto.Type,
            FullName = dto.FullName,
            Email = dto.Email,
            Phone = dto.Phone,
            CompanyName = dto.CompanyName,
            PositionNeeded = dto.PositionNeeded,
            Message = dto.Message,
            CvUrl = dto.CvUrl
        };
    }

    public void UpdateEntity(ContactInquiry entity, UpdateInquiryDto dto)
    {
        entity.IsProcessed = dto.IsProcessed;
    }
}
