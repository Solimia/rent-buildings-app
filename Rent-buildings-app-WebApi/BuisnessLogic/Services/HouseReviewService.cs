using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuisnessLogic.DTO_s;
using DataAccess.Data.Entities;
using DataAccess.Repositories;

namespace BusinessLogic.Services
{
    public class HouseReviewService
    {
        private readonly IHouseReviewRepository _repo;

        public HouseReviewService(IHouseReviewRepository repo)
        {
            _repo = repo;
        }

        public async Task AddAsync(ReviewDto dto)
        {
            var review = new HouseReview
            {
                HouseId = dto.HouseId,
                UserId = dto.UserId,
                Rating = dto.Rating,
                Comment = dto.Comment
            };

            await _repo.AddAsync(review);
            await _repo.SaveAsync();
        }

        public async Task<IEnumerable<HouseReviewResponseDto>> GetReviewsByHouseAsync(int houseId)
        {
            var reviews = await _repo.GetByHouseIdAsync(houseId);

            return reviews.Select(r => new HouseReviewResponseDto
            {
                Id = r.Id,
                HouseId = r.HouseId,
                UserId = r.UserId,
                Rating = r.Rating,
                Comment = r.Comment,
                UserEmail = r.User?.Email,
                CreatedAt = r.CreatedAt
            });
        }
    }
}


