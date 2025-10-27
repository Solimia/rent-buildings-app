using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;

namespace BuisnessLogic.Interfaces
{
    public interface IHouseService
    {
        Task<HouseDto> GetHouseByIdAsync(int id);
        Task<IEnumerable<HouseDto>> GetAllHousesAsync();
        Task<HouseDto> CreateHouseAsync(HouseDto houseDto);
        Task<HouseDto> UpdateHouseAsync(HouseDto houseDto);
        Task<bool> DeleteHouseAsync(int id);

        Task<IEnumerable<ReviewDto>> GetReviewsAsync(int houseId);
        Task<IEnumerable<HouseImageDto>> GetImagesAsync(int houseId);
        Task<IEnumerable<HouseDto>> SearchHousesAsync(HouseDetailsDto criteria);
    }
}
