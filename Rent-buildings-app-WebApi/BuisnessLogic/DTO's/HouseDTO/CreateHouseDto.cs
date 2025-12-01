using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.DTO_s.HouseDTO
{
    public class CreateHouseDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string? MainimgUrl { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Rooms { get; set; }
        public int MaxGuests { get; set; }
        public double Area { get; set; }
        public double Rating { get; set; } = 0;
        public bool HasWifi { get; set; }
        public bool HasParking { get; set; }
        public bool HasAirConditioning { get; set; }
        public bool HasPool { get; set; }

        public decimal PricePerNight { get; set; }
        public bool IsShortTermAvailable { get; set; }

        public bool IsLongTermAvailable { get; set; }
        public decimal? PricePerMonth { get; set; }
        public decimal? DepositAmount { get; set; }
        public int? MinMonths { get; set; }
        public bool UtilitiesIncluded { get; set; }
        public string? UtilitiesDescription { get; set; }

        public bool IsPetsAllowed { get; set; }
        public bool IsSmokingAllowed { get; set; }
        public TimeSpan CheckInTime { get; set; }
        public TimeSpan CheckOutTime { get; set; }

        public string OwnerId { get; set; }

        public int? CategoryId { get; set; }
    }
}
