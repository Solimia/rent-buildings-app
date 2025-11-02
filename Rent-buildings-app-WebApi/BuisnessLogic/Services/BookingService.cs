using BuisnessLogic.DTO_s;
using BuisnessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class BookingService : IBookingService
    {
        public Task<BookingDto> AddBookingAsync(BookingDto bookingDto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CancelBookingAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<BookingDto> GetBookingByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<BookingDto>> GetBookingsForHouseAsync(int houseId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<BookingDto>> GetBookingsForUserAsync(int userId)
        {
            throw new NotImplementedException();
        }
    }
}
