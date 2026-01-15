using IcsBackend.Features.Inquiries.Models;

namespace IcsBackend.Features.Inquiries.Repositories;

public interface IInquiryRepository
{
    Task<IEnumerable<ContactInquiry>> GetAllAsync();
    Task<ContactInquiry?> GetByIdAsync(int id);
    Task<ContactInquiry> CreateAsync(ContactInquiry inquiry);
    Task<ContactInquiry> UpdateAsync(ContactInquiry inquiry);
    Task<bool> DeleteAsync(int id);
    Task<IEnumerable<ContactInquiry>> GetByTypeAsync(InquiryType type);
    Task<IEnumerable<ContactInquiry>> GetUnprocessedAsync();
}
