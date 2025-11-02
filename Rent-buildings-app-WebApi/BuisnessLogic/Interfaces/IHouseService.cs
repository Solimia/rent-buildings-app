using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDto;
using BuisnessLogic.DTO_s.HouseDTO;
using DataAccess.Data.Entities;

namespace BuisnessLogic.Interfaces
{
    public interface IHouseService
    {
        Task<HouseDto> GetHouseByIdAsync(int id);
        Task<IEnumerable<HouseDto>> GetAllHousesAsync();
        Task<HouseDto> CreateHouseAsync(CreateHouseDto houseDto);
        Task<House> UpdateHouseAsync(UpdateHouseDto houseDto);
        Task<bool> DeleteHouseAsync(int id);

        Task<IEnumerable<ReviewDto>> GetReviewsAsync(int houseId);
        Task<IEnumerable<HouseImageDto>> GetImagesAsync(int houseId);
        Task<IEnumerable<HouseDto>> SearchHousesAsync(HouseDetailsDto criteria);
    }
}
