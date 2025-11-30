using Microsoft.AspNetCore.Identity;

namespace DataAccess.Data.Entities
{
    public class User : IdentityUser
    {
        // Власні будинки
        public List<House> OwnedHouses { get; set; } = new List<House>();

        // Зараз орендовані будинки
        public List<House> RentedHouses { get; set; } = new List<House>();

        // Відгуки користувача
        public List<HouseReview> HouseReviews { get; set; } = new List<HouseReview>();

        // Бронювання
        public List<Booking> Bookings { get; set; } = new List<Booking>();
    }


}

