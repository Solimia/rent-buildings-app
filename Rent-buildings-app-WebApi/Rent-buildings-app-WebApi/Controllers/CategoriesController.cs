using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDto;
using BuisnessLogic.DTO_s.HouseDTO;
using BuisnessLogic.Interfaces;
using BuisnessLogic.Services;
using DataAccess.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Rent_buildings_app_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> GetCategories()
        {
            return Ok(await categoryService.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryDto>> GetCategory(int id)
        {
            return Ok(await categoryService.GetByIdAsync(id));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] CreateCategoryDto? category)
        {
            if (category is null)
                return BadRequest("Request body is required.");

            await categoryService.UpdateAsync(id, category);
            return NoContent();
        }


        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCategoryDto? categoryDto)
        {
            // 1. Перевіряємо чи тіло запиту не порожнє
            if (categoryDto is null)
                return BadRequest("Request body is required.");

            // 2. Перевірка валідності моделі (якщо ти використовуєш атрибути в DTO)
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // 3. Створюємо через сервіс (сервіс повертає CategoryDto або створену ентіті)
            var created = await categoryService.CreateAsync(categoryDto);

            // 4. Повертаємо CreatedAtAction з адресою на GetCategory
            return CreatedAtAction(nameof(GetCategory), new { id = created.Id }, created);
        }




        //[Authorize(Roles = Roles.ADMIN, AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await categoryService.DeleteAsync(id);
            return NoContent();
        }
    }
}
