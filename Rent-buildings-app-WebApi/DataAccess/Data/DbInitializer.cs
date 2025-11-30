using DataAccess.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public static class DbInitializer
    {
        public static void SeedHouses(this ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<House>().HasData(
                new House
                {
                    Id = 1,
                    Title = "Cozy Cottage",
                    Description = "A small cozy house in the countryside.",
                    MainimgUrl = "https://zhzh.info/_pu/104/86083546.jpg",
                    Address = "123 Country Lane",
                    City = "Kyiv",
                    Country = "Ukraine",
                    Rooms = 3,
                    MaxGuests = 4,
                    Area = 80,
                    HasWifi = true,
                    HasParking = true,
                    HasAirConditioning = false,
                    HasPool = false,
                    PricePerNight = 50,
                    IsShortTermAvailable = true,
                    IsLongTermAvailable = true,
                    PricePerMonth = 1000,
                    DepositAmount = 200,
                    MinMonths = 1,
                    UtilitiesIncluded = true,
                    UtilitiesDescription = "Water, electricity, internet",
                    IsPetsAllowed = true,
                    IsSmokingAllowed = false,
                    CheckInTime = new TimeSpan(14, 0, 0),
                    CheckOutTime = new TimeSpan(12, 0, 0),
                    Rating = 4.5,
                    //OwnerId = null,
                    //TenantId = null
                },
                new House
                {
                    Id = 2,
                    Title = "Modern Apartment",
                    Description = "A modern apartment in the city center.",
                    MainimgUrl = "https://media.decorateme.com/images/1c/ee/e1/moshchenie-bruschatkoi-vygliadit-estestvenno-i-organichno.webp",

                    Address = "45 Main Street",
                    City = "Lviv",
                    Country = "Ukraine",
                    Rooms = 2,
                    MaxGuests = 3,
                    Area = 60,
                    HasWifi = true,
                    HasParking = false,
                    HasAirConditioning = true,
                    HasPool = false,
                    PricePerNight = 70,
                    IsShortTermAvailable = true,
                    IsLongTermAvailable = false,
                    //OwnerId = null
                }
            );
        }

        public static void SeedCategories(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Apartment" },
                new Category { Id = 2, Name = "House" },
                new Category { Id = 3, Name = "Studio" },
                new Category { Id = 4, Name = "Villa" },
                new Category { Id = 5, Name = "Cabin" }
            );
        }
        public static void SeedHouseImages(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HouseImage>().HasData(
                new HouseImage { Id = 1, HouseId = 1, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" },
                new HouseImage { Id = 2, HouseId = 1, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" },
                new HouseImage { Id = 3, HouseId = 2, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" }
            );
        }




        public static void SeedReviews(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HouseReview>().HasData(
                new HouseReview
                {
                    Id = 1,
                    HouseId = 1,
                    UserId = "1",
                    Rating = 5,
                    Comment = "Гарний просторий будинок, все супер!",
                    CreatedAt = DateTime.Now
                },
                new HouseReview
                {
                    Id = 2,
                    HouseId = 2,
                    UserId = "1",
                    Rating = 4,
                    Comment = "Все добре, але поганий інтернет.",
                    CreatedAt = DateTime.Now.AddMinutes(-30)
                },
                new HouseReview
                {
                    Id = 3,
                    HouseId = 3,
                    UserId = "1",
                    Rating = 5,
                    Comment = "Чисто, затишно, рекомендую!",
                    CreatedAt = DateTime.Now.AddHours(-3)
                }
            );
        }

        //public static void SeedBookings(this ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Booking>().HasData(
        //        new Booking
        //        {
        //            Id = 1,
        //            HouseId = 1,
        //            UserId = 3,
        //            StartDate = new DateTime(2025, 11, 1),
        //            EndDate = new DateTime(2025, 11, 5),
        //            IsLongTerm = false,
        //            TotalPrice = 200
        //        },
        //        new Booking
        //        {
        //            Id = 2,
        //            HouseId = 2,
        //            UserId = 1,
        //            StartDate = new DateTime(2025, 12, 1),
        //            EndDate = new DateTime(2026, 2, 1),
        //            IsLongTerm = true,
        //            TotalPrice = 2100
        //        }
        //    );
        //}
    }
}
