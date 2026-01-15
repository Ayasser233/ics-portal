using IcsBackend.Data;
using IcsBackend.Features.Inquiries.Models;
using Microsoft.EntityFrameworkCore;

namespace IcsBackend.Features.Inquiries.Repositories;

public class InquiryRepository(ApplicationDbContext context) : IInquiryRepository
{
    private readonly ApplicationDbContext _context = context;

    public async Task<IEnumerable<ContactInquiry>> GetAllAsync()
    {
        return await _context.ContactInquiries
            .OrderByDescending(i => i.CreatedAt)
            .ToListAsync();
    }

    public async Task<ContactInquiry?> GetByIdAsync(int id)
    {
        return await _context.ContactInquiries.FindAsync(id);
    }

    public async Task<ContactInquiry> CreateAsync(ContactInquiry inquiry)
    {
        _context.ContactInquiries.Add(inquiry);
        await _context.SaveChangesAsync();
        return inquiry;
    }

    public async Task<ContactInquiry> UpdateAsync(ContactInquiry inquiry)
    {
        _context.ContactInquiries.Update(inquiry);
        await _context.SaveChangesAsync();
        return inquiry;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var inquiry = await _context.ContactInquiries.FindAsync(id);
        if (inquiry == null)
            return false;

        _context.ContactInquiries.Remove(inquiry);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<IEnumerable<ContactInquiry>> GetByTypeAsync(InquiryType type)
    {
        return await _context.ContactInquiries
            .Where(i => i.Type == type)
            .OrderByDescending(i => i.CreatedAt)
            .ToListAsync();
    }

    public async Task<IEnumerable<ContactInquiry>> GetUnprocessedAsync()
    {
        return await _context.ContactInquiries
            .Where(i => !i.IsProcessed)
            .OrderByDescending(i => i.CreatedAt)
            .ToListAsync();
    }
}
