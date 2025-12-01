using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Data.Entities;

namespace DataAccess.Repositories
{
    public interface IHouseReviewRepository
    {
        Task AddAsync(HouseReview review);
        Task<IEnumerable<HouseReview>> GetByHouseIdAsync(int houseId);
        Task SaveAsync();
    }
}