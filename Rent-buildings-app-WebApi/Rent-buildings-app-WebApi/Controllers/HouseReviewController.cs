using BuisnessLogic.DTO_s;
using BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;

namespace Rent_buildings_app_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HouseReviewController : ControllerBase
    {
        private readonly HouseReviewService _service;

        public HouseReviewController(HouseReviewService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ReviewDto dto)
        {
            await _service.AddAsync(dto);
            return Ok("Review added");
        }

        [HttpGet("{houseId}")]
        public async Task<IActionResult> Get(int houseId)
        {
            var result = await _service.GetReviewsByHouseAsync(houseId);
            return Ok(result);
        }
    }
}
