using IcsBackend.Core.Exceptions;
using IcsBackend.Features.Inquiries.DTOs;
using IcsBackend.Features.Inquiries.Models;
using IcsBackend.Features.Inquiries.Repositories;

namespace IcsBackend.Features.Inquiries.Services;

/// Service implementing inquiry business logic
public class InquiryService(
    IInquiryRepository repository,
    IInquiryMapper mapper,
    ILogger<InquiryService> logger) : IInquiryService
{
    private readonly IInquiryRepository _repository = repository;
    private readonly IInquiryMapper _mapper = mapper;
    private readonly ILogger<InquiryService> _logger = logger;

    public async Task<IEnumerable<InquiryResponseDto>> GetAllInquiriesAsync()
    {
        var inquiries = await _repository.GetAllAsync();
        return inquiries.Select(_mapper.ToDto);
    }

    public async Task<InquiryResponseDto> GetInquiryByIdAsync(int id)
    {
        var inquiry = await _repository.GetByIdAsync(id) 
            ?? throw new NotFoundException($"Inquiry with ID {id} not found.");
        
        return _mapper.ToDto(inquiry);
    }

    public async Task<IEnumerable<InquiryResponseDto>> GetInquiriesByTypeAsync(InquiryType type)
    {
        var inquiries = await _repository.GetByTypeAsync(type);
        return inquiries.Select(_mapper.ToDto);
    }

    public async Task<IEnumerable<InquiryResponseDto>> GetUnprocessedInquiriesAsync()
    {
        var inquiries = await _repository.GetUnprocessedAsync();
        return inquiries.Select(_mapper.ToDto);
    }

    public async Task<InquiryResponseDto> CreateInquiryAsync(CreateInquiryDto dto)
    {
        // Business logic validation
        ValidateInquiryData(dto);

        var inquiry = _mapper.ToEntity(dto);
        inquiry.CreatedAt = DateTime.UtcNow;

        var created = await _repository.CreateAsync(inquiry);
        _logger.LogInformation("Inquiry created with ID: {Id}, Type: {Type}", created.Id, created.Type);

        return _mapper.ToDto(created);
    }

    public async Task<InquiryResponseDto> UpdateInquiryAsync(int id, UpdateInquiryDto dto)
    {
        var inquiry = await _repository.GetByIdAsync(id)
            ?? throw new NotFoundException($"Inquiry with ID {id} not found.");

        _mapper.UpdateEntity(inquiry, dto);
        
        var updated = await _repository.UpdateAsync(inquiry);
        _logger.LogInformation("Inquiry {Id} updated. IsProcessed: {IsProcessed}", id, updated.IsProcessed);

        return _mapper.ToDto(updated);
    }

    public async Task DeleteInquiryAsync(int id)
    {
        var deleted = await _repository.DeleteAsync(id);
        if (!deleted)
            throw new NotFoundException($"Inquiry with ID {id} not found.");

        _logger.LogInformation("Inquiry {Id} deleted", id);
    }

    // Business logic validation - can be extended without modifying the class (OCP)
    private void ValidateInquiryData(CreateInquiryDto dto)
    {
        var errors = new Dictionary<string, string[]>();

        // Type-specific validation
        switch (dto.Type)
        {
            case InquiryType.Company when string.IsNullOrWhiteSpace(dto.CompanyName):
                errors.Add(nameof(dto.CompanyName), new[] { "Company name is required for company inquiries." });
                break;

            case InquiryType.Applicant when string.IsNullOrWhiteSpace(dto.CvUrl):
                errors.Add(nameof(dto.CvUrl), new[] { "CV URL is required for applicant inquiries." });
                break;
        }

        if (errors.Count > 0)
            throw new ValidationException(errors);
    }
}
