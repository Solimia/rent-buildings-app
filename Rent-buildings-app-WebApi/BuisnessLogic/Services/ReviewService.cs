using BuisnessLogic.DTO_s;
using BuisnessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class ReviewService : IReviewService
    {
        public Task<ReviewDto> AddReviewAsync(ReviewDto reviewDto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteReviewAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ReviewDto> GetReviewByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ReviewDto>> GetReviewsForHouseAsync(int houseId)
        {
            throw new NotImplementedException();
        }
    }
}
