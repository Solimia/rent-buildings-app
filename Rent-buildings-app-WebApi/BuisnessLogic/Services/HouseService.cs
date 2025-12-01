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
using static System.Net.Mime.MediaTypeNames;

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
            //house.Rating = house.Reviews.Any()
            //    ? house.Reviews.Average(r => r.Rating)
            //    : 0;

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
            var houses = await houseRepository.GetAllWithIncludesAsync(h => h.Category);
            return mapper.Map<IEnumerable<HouseDto>>(houses);
        }
        public async Task<PaginationDto<HouseDto>> GetHousePagination(int page, int size, string? CategoryId, string? BedroomsCountm, string? BathroomsCount, string? Rating,string? searchP)
        {
            var houses = await houseRepository.GetHousePagination(page,size, CategoryId, BedroomsCountm, BathroomsCount, Rating, searchP);
            return mapper.Map<PaginationDto<HouseDto>>(houses);
        }
        public async Task<HouseDto> GetHouseByIdAsync(int id)
        {
            var house = await houseRepository.GetByIdWithIncludesAsync(id, h => h.Category);
            return mapper.Map<HouseDto>(house);
        }



        public async Task<IList<HouseImageDto>> GetImagesAsync(int houseId)
        {
            //var image = await houseRepository.GetByIdAsync(houseId);
            //return mapper.Map<IEnumerable<HouseImageDto>>(image);



            var model = await houseRepository.GetImages(houseId);
            return mapper.Map<IList<HouseImageDto>>(model);

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

        public async Task<House> UpdateHouseAsync(UpdateHouseDto houseDto)
        {
            var entity = await houseRepository.GetByIdAsync(houseDto.Id);
            if (entity == null) throw new Exception("House not found");

            UpdateHouseProperties(entity, houseDto);

            await houseRepository.UpdateAsync(entity);

            return entity; // Повертаємо оновлений будинок
        }



        private void UpdateHouseProperties(House entity, UpdateHouseDto houseDto)
        {
            if (houseDto.Title != null)
                entity.Title = houseDto.Title;

            if (houseDto.Description != null)
                entity.Description = houseDto.Description;

            if (houseDto.Address != null)
                entity.Address = houseDto.Address;



            if (houseDto.City != null)
                entity.City = houseDto.City;

            if (houseDto.Country != null)
                entity.Country = houseDto.Country;

            if (houseDto.Rooms.HasValue)
                entity.Rooms = houseDto.Rooms.Value;

            if (houseDto.MaxGuests.HasValue)
                entity.MaxGuests = houseDto.MaxGuests.Value;

            if (houseDto.Area.HasValue)
                entity.Area = houseDto.Area.Value;

            if (houseDto.HasWifi.HasValue)
                entity.HasWifi = houseDto.HasWifi.Value;

            if (houseDto.HasParking.HasValue)
                entity.HasParking = houseDto.HasParking.Value;

            if (houseDto.HasAirConditioning.HasValue)
                entity.HasAirConditioning = houseDto.HasAirConditioning.Value;

            if (houseDto.HasPool.HasValue)
                entity.HasPool = houseDto.HasPool.Value;

            if (houseDto.PricePerNight.HasValue)
                entity.PricePerNight = houseDto.PricePerNight.Value;

            if (houseDto.IsShortTermAvailable.HasValue)
                entity.IsShortTermAvailable = houseDto.IsShortTermAvailable.Value;

            if (houseDto.IsLongTermAvailable.HasValue)
                entity.IsLongTermAvailable = houseDto.IsLongTermAvailable.Value;

            if (houseDto.PricePerMonth.HasValue)
                entity.PricePerMonth = houseDto.PricePerMonth.Value;

            if (houseDto.DepositAmount.HasValue)
                entity.DepositAmount = houseDto.DepositAmount.Value;

            if (houseDto.MinMonths.HasValue)
                entity.MinMonths = houseDto.MinMonths.Value;

            if (houseDto.UtilitiesIncluded.HasValue)
                entity.UtilitiesIncluded = houseDto.UtilitiesIncluded.Value;

            if (houseDto.UtilitiesDescription != null)
                entity.UtilitiesDescription = houseDto.UtilitiesDescription;

            if (houseDto.IsPetsAllowed.HasValue)
                entity.IsPetsAllowed = houseDto.IsPetsAllowed.Value;

            if (houseDto.IsSmokingAllowed.HasValue)
                entity.IsSmokingAllowed = houseDto.IsSmokingAllowed.Value;

            if (houseDto.CheckInTime.HasValue)
                entity.CheckInTime = houseDto.CheckInTime.Value;

            if (houseDto.CheckOutTime.HasValue)
                entity.CheckOutTime = houseDto.CheckOutTime.Value;

            if (houseDto.CategoryId.HasValue)
                entity.CategoryId = houseDto.CategoryId.Value;
        }

    }

}
