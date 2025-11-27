using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Data;
using DataAccess.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class HouseReviewRepository : IHouseReviewRepository
    {
        private readonly HouseRentDbContext _context;

        public HouseReviewRepository(HouseRentDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(HouseReview review)
        {
            await _context.HouseReviews.AddAsync(review);
        }

        public async Task<IEnumerable<HouseReview>> GetByHouseIdAsync(int houseId)
        {
            return await _context.HouseReviews
                .Where(r => r.HouseId == houseId)
                .Include(r => r.User)
                .ToListAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
