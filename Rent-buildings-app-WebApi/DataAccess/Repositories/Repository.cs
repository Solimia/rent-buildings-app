using Azure;
using DataAccess.Data;
using DataAccess.Data.Entities;
using DataAccess.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
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
        public async Task<IList<HouseImage>> GetImages(int id)
        {
            var entities = context.HouseImages.Where(x=> x.HouseId == id);

            return await entities.ToListAsync();
        }
        public async Task<PaginationObj<House>> GetHousePagination(int page = 0,int size = 12,string? CategoryId = "All", string? BedroomsCountm = "Any", string? BathroomsCount = "Any", string? Rating = "Any")
        {
            //var entities = context.Houses.Where().Skip((page - 1) * size).Take(size);
            var query = context.Houses.AsQueryable();
            if (CategoryId != null && CategoryId != "All")
            {
                query = query.Where(h => h.CategoryId == int.Parse(CategoryId));
            }
            if (BedroomsCountm != null && BedroomsCountm != "Any")
            {
                query = query.Where(h => h.Rooms == int.Parse(BedroomsCountm));
            }
            if (BathroomsCount != null && BathroomsCount != "Any")
            {
                query = query.Where(h => h.Bathrooms == int.Parse(BathroomsCount));
            }
            if (Rating != null && Rating != "Any")
            {
                query = query.Where(h => Math.Floor(h.Rating) >= int.Parse(Rating));
            }
            var totalcountC = query.Count();

            var paginationObject = new PaginationObj<House>(
                items: query.Skip((page - 1) * size).Take(size).ToList(),
                totalCount: totalcountC, 
                size: size,
                page:page);
            return paginationObject;
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


        public async Task<IReadOnlyList<T>> GetAllWithIncludesAsync(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = dbSet;

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return await query.ToListAsync();
        }

        public async Task<T?> GetByIdWithIncludesAsync(int id, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = dbSet;

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return await query.FirstOrDefaultAsync(e => e.Id == id);
        }



    }
}


public class PaginationObj<T>
{

    public List<T> items { get; set; }

    public int totalCount { get; set; }
    public int size { get; set; }
    public int page { get; set; }

    public PaginationObj(List<T> items, int totalCount, int size, int page)
    {
        this.items = items;
        this.totalCount = totalCount;
        this.size = size;
        this.page = page;
    }
}