using AutoMapper;
using BuisnessLogic.DTO_s;
using BuisnessLogic.Interfaces;
using DataAccess.Data.Entities;
using DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper mapper;
        private readonly IRepository<Category> categoryRepository;

        public CategoryService(IMapper mapper, IRepository<Category> categoryRepository)
        {
            this.mapper = mapper;
            this.categoryRepository = categoryRepository;
        }
        public async Task<CategoryDto> CreateAsync(CreateCategoryDto dto)
        {
            var category = mapper.Map<Category>(dto);
            await categoryRepository.AddAsync(category); // repository повертає ентіті з Id після SaveChanges

            return mapper.Map<CategoryDto>(category);
        }



        public async Task DeleteAsync(int id)
        {
            var item = await GetEntityById(id);
            await categoryRepository.DeleteAsync(item);
        }

        public async Task<IEnumerable<CategoryDto>> GetAllAsync()
        {
            var items = await categoryRepository.GetAllAsync();

            return mapper.Map<IEnumerable<CategoryDto>>(items);
        }

        public async Task<CategoryDto> GetByIdAsync(int id)
        {
            var item = await GetEntityById(id);
            return mapper.Map<CategoryDto>(item);
        }

        public async Task UpdateAsync(int id, CreateCategoryDto categoryDto)
        {
            if (categoryDto == null)
                throw new HttpException("Category data is required.", HttpStatusCode.BadRequest);

            var category = await GetEntityById(id);

            mapper.Map(categoryDto, category);

            await categoryRepository.UpdateAsync(category);
        }



        private async Task<Category> GetEntityById(int id)
        {
            if (id < 0)
                throw new HttpException("Id can not be negative.", HttpStatusCode.BadRequest); // 400

            var item = await categoryRepository.GetByIdAsync(id);

            if (item == null)
                throw new HttpException($"Category with id:{id} not found.", HttpStatusCode.NotFound); // 404

            return item;
        }
    }
}
