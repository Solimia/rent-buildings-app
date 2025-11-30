namespace DataAccess.Data.Entities
{
    public class House : BaseEntity
    {
        public int Id { get; set; }

        // Інформація про будинок
        public string Title { get; set; }
        public string Description { get; set; }

        // Розташування
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        // Характеристики
        public int Rooms { get; set; }
        public int MaxGuests { get; set; }
        public double Area { get; set; }

        // Зручності
        public bool HasWifi { get; set; }
        public bool HasParking { get; set; }
        public bool HasAirConditioning { get; set; }
        public bool HasPool { get; set; }

        // Подобова оренда
        public decimal PricePerNight { get; set; }
        public bool IsShortTermAvailable { get; set; }

        // Довгострокова оренда
        public bool IsLongTermAvailable { get; set; }
        public decimal? PricePerMonth { get; set; }
        public decimal? DepositAmount { get; set; }
        public int? MinMonths { get; set; }
        public bool UtilitiesIncluded { get; set; }
        public string? UtilitiesDescription { get; set; }

        // Правила проживання
        public bool IsPetsAllowed { get; set; }
        public bool IsSmokingAllowed { get; set; }
        public TimeSpan CheckInTime { get; set; }
        public TimeSpan CheckOutTime { get; set; }

        // Рейтинг
        public double Rating { get; set; }
        public List<HouseReview> Reviews { get; set; } = new List<HouseReview>();

        // Власник
        public string? OwnerId { get; set; }
        public User? Owner { get; set; }

        // Той, хто зняв будинок (орендар)
        public string? TenantId { get; set; }
        public User? Tenant { get; set; }

        public int? CategoryId { get; set; }  // nullable, щоб не вимагати відразу
        public Category? Category { get; set; }

        // Фото
        public List<HouseImage> Images { get; set; } = new List<HouseImage>();
        public List<Booking> Bookings { get; set; } = new List<Booking>();// історія бронювань



    }

}
