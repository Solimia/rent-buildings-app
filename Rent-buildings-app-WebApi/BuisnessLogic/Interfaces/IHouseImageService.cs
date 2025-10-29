using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Interfaces
{
    public interface IHouseImageService
    {
        Task<HouseImageDto> AddImageAsync(HouseImageDto imageDto);
        Task<bool> DeleteImageAsync(int id);
        Task<IEnumerable<HouseImageDto>> GetImagesForHouseAsync(int houseId);
    }
}
