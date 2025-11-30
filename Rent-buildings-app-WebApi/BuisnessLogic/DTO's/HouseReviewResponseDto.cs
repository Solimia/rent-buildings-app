using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.DTO_s
{
    public class HouseReviewResponseDto
    {
        public int Id { get; set; }
        public int HouseId { get; set; }
        public string? UserId { get; set; }

        public string ? UserEmail { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; }
    }

}
