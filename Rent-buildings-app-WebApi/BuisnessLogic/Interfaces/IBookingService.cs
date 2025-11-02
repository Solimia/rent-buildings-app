using BuisnessLogic.DTO_s;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Interfaces
{
    public interface IBookingService
    {
        Task<BookingDto> GetBookingByIdAsync(int id);
        Task<IEnumerable<BookingDto>> GetBookingsForUserAsync(int userId);
        Task<IEnumerable<BookingDto>> GetBookingsForHouseAsync(int houseId);
        Task<BookingDto> AddBookingAsync(BookingDto bookingDto);
        Task<bool> CancelBookingAsync(int id);
    }
}
