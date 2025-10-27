using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;
using BuisnessLogic.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Rent_buildings_app_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HousesController : ControllerBase
    {
        private readonly IHouseService houseService;

        public HousesController(IHouseService houseService)
        {
            this.houseService = houseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var houses = await houseService.GetAllHousesAsync();
            return Ok(houses);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var house = await houseService.GetHouseByIdAsync(id);
            if (house == null)
                return NotFound();

            return Ok(house);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] HouseDto houseDto)
        {
            if (houseDto == null)
                return BadRequest();

            var createdHouse = await houseService.CreateHouseAsync(houseDto);
            return CreatedAtAction(nameof(GetById), new { id = createdHouse.Id }, createdHouse);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] HouseDto houseDto)
        {
            if (houseDto == null || houseDto.Id != id)
                return BadRequest();

            var updatedHouse = await houseService.UpdateHouseAsync(houseDto);
            return Ok(updatedHouse);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await houseService.DeleteHouseAsync(id);
            if (!result)
                return NotFound();

            return NoContent();
        }

        // Додатково можна додати методи для отримання Reviews або Images
        [HttpGet("{id}/reviews")]
        public async Task<IActionResult> GetReviews(int id)
        {
            var reviews = await houseService.GetReviewsAsync(id);
            return Ok(reviews);
        }

        [HttpGet("{id}/images")]
        public async Task<IActionResult> GetImages(int id)
        {
            var images = await houseService.GetImagesAsync(id);
            return Ok(images);
        }
        [HttpGet("{id}/details")]
        public async Task<ActionResult<HouseDetailsDto>> GetHouseDetails(int id)
        {
            var houseDetails = await houseService.GetHouseByIdAsync(id);
            if (houseDetails == null)
                return NotFound();

            return Ok(houseDetails);
        }
    }
}
