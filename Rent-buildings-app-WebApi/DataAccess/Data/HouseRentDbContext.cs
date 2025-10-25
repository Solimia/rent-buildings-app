using DataAccess.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class HouseRentDbContext : DbContext
    {
        public HouseRentDbContext() { }
        public HouseRentDbContext(DbContextOptions<HouseRentDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<House> Houses { get; set; }
        public DbSet<HouseImage> HouseImages { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.SeedUsers();
            modelBuilder.SeedHouses();
            modelBuilder.SeedHouseImages();
            modelBuilder.SeedReviews();
            modelBuilder.SeedBookings();


            // House - Owner
            modelBuilder.Entity<House>()
                .HasOne(h => h.Owner)
                .WithMany(u => u.OwnedHouses)
                .HasForeignKey(h => h.OwnerId)
                .OnDelete(DeleteBehavior.Restrict);

            // House - Tenant
            modelBuilder.Entity<House>()
                .HasOne(h => h.Tenant)
                .WithMany(u => u.RentedHouses)
                .HasForeignKey(h => h.TenantId)
                .OnDelete(DeleteBehavior.SetNull);

            // House - HouseImage
            modelBuilder.Entity<HouseImage>()
                .HasOne(img => img.House)
                .WithMany(h => h.Images)
                .HasForeignKey(img => img.HouseId)
                .OnDelete(DeleteBehavior.Cascade);

            // House - Review
            modelBuilder.Entity<Review>()
                .HasOne(r => r.House)
                .WithMany(h => h.Reviews)
                .HasForeignKey(r => r.HouseId)
                .OnDelete(DeleteBehavior.Cascade);

            // Review - User
            modelBuilder.Entity<Review>()
                .HasOne(r => r.User)
                .WithMany(u => u.Reviews)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Booking - House
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.House)
                .WithMany(h => h.Bookings)
                .HasForeignKey(b => b.HouseId)
                .OnDelete(DeleteBehavior.Cascade);

            // Booking - User
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.User)
                .WithMany(u => u.Bookings)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
