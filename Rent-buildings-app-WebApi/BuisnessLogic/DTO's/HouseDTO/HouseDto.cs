using DataAccess.Data.Entities;

namespace BuisnessLogic.DTO_s.HouseDTO
{
    public class HouseDto // для списку
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string City { get; set; }
        public string Address { get; set; }

        public string Country { get; set; }
        public double Area { get; set; }
        public decimal PricePerNight { get; set; }
        public string OwnerId { get; set; }

        public string? MainimgUrl { get; set; }  // Щоб показати одне фото в списку

        public double Rating { get; set; }

        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
