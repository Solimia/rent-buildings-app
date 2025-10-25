using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data.Entities
{
    public class Booking
    {
        public int Id { get; set; }

        // Будинок
        public int HouseId { get; set; }
        public House House { get; set; }

        // Орендар
        public int UserId { get; set; }
        public User User { get; set; }

        // Дати оренди
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        // Тип оренди: короткострокова або довгострокова
        public bool IsLongTerm { get; set; }

        // Загальна ціна
        public decimal TotalPrice { get; set; }
    }

}
