using DataAccess.Data.Entities;

namespace DataAccess.Repositories
{
    public interface IRepository<T> where T : class, BaseEntity
    {
        Task<IReadOnlyList<T>> GetAllAsync(
            //int? pageNumber = null,
            //int pageSize = 10
            );
        Task<T?> GetByIdAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);
        Task DeleteAsync(T? id);
    }
}
