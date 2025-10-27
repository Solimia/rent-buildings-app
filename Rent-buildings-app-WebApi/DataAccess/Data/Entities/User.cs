using Microsoft.AspNetCore.Identity;

namespace DataAccess.Data.Entities
{
    public class User : IdentityUser,BaseEntity
    {
        public string Name { get; set; }

        // Власні будинки
        public List<House> OwnedHouses { get; set; } = new List<House>();

        // Зараз орендовані будинки
        public List<House> RentedHouses { get; set; } = new List<House>();

        // Відгуки користувача
        public List<Review> Reviews { get; set; } = new List<Review>();

        // Бронювання
        public List<Booking> Bookings { get; set; } = new List<Booking>();
    }


}

