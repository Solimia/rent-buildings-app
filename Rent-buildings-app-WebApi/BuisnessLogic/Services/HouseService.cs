using AutoMapper;
using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDto;
using BuisnessLogic.DTO_s.HouseDTO;
using BuisnessLogic.Interfaces;
using DataAccess.Data.Entities;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class HouseService : IHouseService
    {
        private readonly IRepository<House> houseRepository;
        private readonly IMapper mapper;

        public HouseService(IRepository<House> houseRepository, IMapper mapper)
        {
            this.houseRepository = houseRepository;
            this.mapper = mapper;
        }

        public async Task<HouseDto> CreateHouseAsync(CreateHouseDto houseDto)
        {
            var house = mapper.Map<House>(houseDto);
            house.Rating = house.Reviews.Any()
                ? house.Reviews.Average(r => r.Rating)
                : 0;

            await houseRepository.AddAsync(house);
            return mapper.Map<HouseDto>(house);
        }

        public async Task<bool> DeleteHouseAsync(int id)
        {
            var house = await houseRepository.GetByIdAsync(id);
            if (house == null) return false;
            await houseRepository.DeleteAsync(house);
            return true;
        }

        public async Task<IEnumerable<HouseDto>> GetAllHousesAsync()
        {
            var houses = await houseRepository.GetAllAsync();
            return mapper.Map<IEnumerable<HouseDto>>(houses);
        }

        public async Task<HouseDto> GetHouseByIdAsync(int id)
        {
            var house = await houseRepository.GetByIdAsync(id);
            return mapper.Map<HouseDto>(house);
        }

        public async Task<IEnumerable<HouseImageDto>> GetImagesAsync(int houseId)
        {
            //var image = await houseRepository.GetByIdAsync(houseId);
            //return mapper.Map<IEnumerable<HouseImageDto>>(image);
            throw new NotImplementedException();

        }

        public async Task<IEnumerable<ReviewDto>> GetReviewsAsync(int houseId)
        {
            //var review = await houseRepository.GetByIdAsync(houseId);
            //return mapper.Map<IEnumerable<ReviewDto>>(review);
            throw new NotImplementedException();

        }

        public Task<IEnumerable<HouseDto>> SearchHousesAsync(HouseDetailsDto criteria)
        {
            throw new NotImplementedException();
        }

        public async Task<HouseDto> UpdateHouseAsync(UpdateHouseDto houseDto)
        {
            var existingHouse = await houseRepository.GetByIdAsync(houseDto.Id);

            // 2) якщо не знайдений – повертаємо null
            if (existingHouse == null)
                return null;

            // 3) мапимо DTO поверх знайденого будинку (оновлюємо поля)
            mapper.Map(houseDto, existingHouse);

            // 4) зберігаємо оновлені дані
            await houseRepository.UpdateAsync(existingHouse);

            // 5) повертаємо DTO для відображення
            return mapper.Map<HouseDto>(existingHouse);
        }


    }

}
