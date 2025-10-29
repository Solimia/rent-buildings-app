using BuisnessLogic.DTO_s;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Interfaces
{
    public interface IReviewService
    {
        Task<ReviewDto> GetReviewByIdAsync(int id);
        Task<IEnumerable<ReviewDto>> GetReviewsForHouseAsync(int houseId);
        Task<ReviewDto> AddReviewAsync(ReviewDto reviewDto);
        Task<bool> DeleteReviewAsync(int id);
    }
}
