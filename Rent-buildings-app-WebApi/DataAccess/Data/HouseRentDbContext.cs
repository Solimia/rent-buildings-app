using DataAccess.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data
{
    public class HouseRentDbContext : IdentityDbContext<User>
    {
        public HouseRentDbContext() { }
        public HouseRentDbContext(DbContextOptions<HouseRentDbContext> options) : base(options) { }

        public DbSet<House> Houses { get; set; }
        public DbSet<HouseImage> HouseImages { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().ToTable("Users");

            modelBuilder.SeedHouses();
            modelBuilder.SeedHouseImages();
            modelBuilder.SeedCategories();
            //modelBuilder.SeedReviews();
            //modelBuilder.SeedBookings();


            // House - Owner
            //modelBuilder.Entity<House>()
            //    .HasOne(h => h.Owner)
            //    .WithMany(u => u.OwnedHouses)
            //    .HasForeignKey(h => h.OwnerId)
            //    .OnDelete(DeleteBehavior.Restrict);

            //// House - Tenant
            //modelBuilder.Entity<House>()
            //    .HasOne(h => h.Tenant)
            //    .WithMany(u => u.RentedHouses)
            //    .HasForeignKey(h => h.TenantId)
            //    .OnDelete(DeleteBehavior.SetNull);

            //// House - HouseImage
            //modelBuilder.Entity<HouseImage>()
            //    .HasOne(img => img.House)
            //    .WithMany(h => h.Images)
            //    .HasForeignKey(img => img.HouseId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //// House - Review
            //modelBuilder.Entity<Review>()
            //    .HasOne(r => r.House)
            //    .WithMany(h => h.Reviews)
            //    .HasForeignKey(r => r.HouseId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //// Review - User
            //modelBuilder.Entity<Review>()
            //    .HasOne(r => r.User)
            //    .WithMany(u => u.Reviews)
            //    .HasForeignKey(r => r.UserId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //// Booking - House
            //modelBuilder.Entity<Booking>()
            //    .HasOne(b => b.House)
            //    .WithMany(h => h.Bookings)
            //    .HasForeignKey(b => b.HouseId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //// Booking - User
            //modelBuilder.Entity<Booking>()
            //    .HasOne(b => b.User)
            //    .WithMany(u => u.Bookings)
            //    .HasForeignKey(b => b.UserId)
            //    .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<House>()
                .HasOne(h => h.Owner)
                .WithMany(u => u.OwnedHouses)
                .HasForeignKey(h => h.OwnerId)
                .IsRequired(false)  // nullable FK
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(g => g.Id);

                entity.Property(g => g.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            // House - Tenant
            modelBuilder.Entity<House>()
                .HasOne(h => h.Tenant)
                .WithMany(u => u.RentedHouses)
                .HasForeignKey(h => h.TenantId)
                .IsRequired(false)  // nullable FK
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
                .IsRequired()
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
