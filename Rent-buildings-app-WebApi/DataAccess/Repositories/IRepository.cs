using DataAccess.Data.Entities;
using System.Linq.Expressions;

namespace DataAccess.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<IReadOnlyList<T>> GetAllAsync(
            int? pageNumber = null,
            int pageSize = 10
            );
        Task<T?> GetByIdAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task<IList<HouseImage>> GetImages(int id);
        Task<PaginationObj<House>> GetHousePagination(int page = 0, int size = 12, string? CategoryId = "All", string? BedroomsCountm = "Any", string? BathroomsCount = "Any", string? Rating = "Any", string? searchP = "");
        Task DeleteAsync(int id);
        Task DeleteAsync(T? id);
        Task<IReadOnlyList<T>> GetAllWithIncludesAsync(params Expression<Func<T, object>>[] includes);
        Task<T?> GetByIdWithIncludesAsync(int id, params Expression<Func<T, object>>[] includes);
    }
}
