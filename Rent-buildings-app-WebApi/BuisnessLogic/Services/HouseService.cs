using AutoMapper;
using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;
using BuisnessLogic.Interfaces;
using DataAccess.Data.Entities;
using DataAccess.Repositories;
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

        public async Task<HouseDto> CreateHouseAsync(HouseDto houseDto)
        {
            var house = mapper.Map<House>(houseDto);
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

        public async Task<HouseDto> UpdateHouseAsync(HouseDto houseDto)
        {
            var house = mapper.Map<House>(houseDto);
            await houseRepository.UpdateAsync(house);
            return mapper.Map<HouseDto>(house);
        }
    }
}
