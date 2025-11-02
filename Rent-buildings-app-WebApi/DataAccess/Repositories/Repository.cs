using DataAccess.Data;
using DataAccess.Data.Entities;
using DataAccess.Helpers;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : class, BaseEntity
    {
        internal HouseRentDbContext context;
        internal DbSet<T> dbSet;

        public Repository(HouseRentDbContext context)
        {
            this.context = context;
            this.dbSet = context.Set<T>();
        }
        public async Task AddAsync(T entity)
        {
            await dbSet.AddAsync(entity);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            await DeleteAsync(entity);
        }

        public async Task DeleteAsync(T? entity)
        {
            if (entity != null)
            {
                dbSet.Remove(entity);
                await context.SaveChangesAsync(true);
            }
        }

        public async Task<IReadOnlyList<T>> GetAllAsync(int? pageNumber = null,
            int pageSize = 10)
        {
            var query = dbSet.AsQueryable();

            if (pageNumber != null)
                query = await query.PaginateAsync(pageNumber.Value, pageSize);

            return await query.ToListAsync();
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await dbSet.FindAsync(id);
        }

        public async Task UpdateAsync(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }
    }
}
