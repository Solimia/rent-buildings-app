using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;
using BuisnessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class HouseImageService : IHouseImageService
    {
        public Task<HouseImageDto> AddImageAsync(HouseImageDto imageDto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteImageAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<HouseImageDto>> GetImagesForHouseAsync(int houseId)
        {
            throw new NotImplementedException();
        }
    }
}
