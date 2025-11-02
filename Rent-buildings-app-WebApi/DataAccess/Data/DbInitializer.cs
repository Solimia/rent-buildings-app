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

        public static void SeedHouseImages(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HouseImage>().HasData(
                new HouseImage { Id = 1, HouseId = 1, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" },
                new HouseImage { Id = 2, HouseId = 1, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" },
                new HouseImage { Id = 3, HouseId = 2, ImageUrl = "https://filesblog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg" }
            );
        }

        //public static void SeedReviews(this ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Review>().HasData(
        //        new Review { Id = 1, HouseId = 1, UserId = 2, Comment = "Great place!", Rating = 5 },
        //        new Review { Id = 2, HouseId = 1, UserId = 3, Comment = "Very cozy.", Rating = 4 }
        //    );
        //}

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
