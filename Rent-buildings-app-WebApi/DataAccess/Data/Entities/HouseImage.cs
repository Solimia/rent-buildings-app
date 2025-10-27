using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data.Entities
{
    public class HouseImage : BaseEntity
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }

        public int HouseId { get; set; }
        public House House { get; set; }

    }
}
