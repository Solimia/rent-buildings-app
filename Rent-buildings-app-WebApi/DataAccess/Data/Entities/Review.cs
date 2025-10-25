using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; } // наприклад від 1 до 5

        public int HouseId { get; set; }
        public House House { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

    }
}
