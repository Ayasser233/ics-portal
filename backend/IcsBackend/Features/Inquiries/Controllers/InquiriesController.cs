using IcsBackend.Features.Inquiries.DTOs;
using IcsBackend.Features.Inquiries.Services;
using IcsBackend.Features.Inquiries.Models;
using Microsoft.AspNetCore.Mvc;
using Asp.Versioning;

namespace IcsBackend.Features.Inquiries.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class InquiriesControllerRefactored : ControllerBase
{
    private readonly IInquiryService _inquiryService;

    public InquiriesControllerRefactored(IInquiryService inquiryService)
    {
        _inquiryService = inquiryService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<InquiryResponseDto>>> GetAll()
    {
        var inquiries = await _inquiryService.GetAllInquiriesAsync();
        return Ok(inquiries);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<InquiryResponseDto>> GetById(int id)
    {
        var inquiry = await _inquiryService.GetInquiryByIdAsync(id);
        return Ok(inquiry);
    }

    [HttpGet("type/{type}")]
    public async Task<ActionResult<IEnumerable<InquiryResponseDto>>> GetByType(int type)
    {
        var inquiries = await _inquiryService.GetInquiriesByTypeAsync((InquiryType)type);
        return Ok(inquiries);
    }

    [HttpGet("unprocessed")]
    public async Task<ActionResult<IEnumerable<InquiryResponseDto>>> GetUnprocessed()
    {
        var inquiries = await _inquiryService.GetUnprocessedInquiriesAsync();
        return Ok(inquiries);
    }

    [HttpPost]
    public async Task<ActionResult<InquiryResponseDto>> Create([FromBody] CreateInquiryDto dto)
    {
        var created = await _inquiryService.CreateInquiryAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPatch("{id}")]
    public async Task<ActionResult<InquiryResponseDto>> Update(int id, [FromBody] UpdateInquiryDto dto)
    {
        var updated = await _inquiryService.UpdateInquiryAsync(id, dto);
        return Ok(updated);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _inquiryService.DeleteInquiryAsync(id);
        return NoContent();
    }
}
