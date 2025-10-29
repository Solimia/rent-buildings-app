namespace BuisnessLogic.DTO_s
{
    public class BookingDto
    {
        public int Id { get; set; }
        public int HouseId { get; set; }
        public string UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsLongTerm { get; set; }
        public decimal TotalPrice { get; set; }
    }

}
