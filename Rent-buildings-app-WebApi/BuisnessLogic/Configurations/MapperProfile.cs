using AutoMapper;
using BuisnessLogic.DTO_s;
using BuisnessLogic.DTO_s.HouseDTO;
using DataAccess.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Configurations
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<House, HouseDto>()
                .ForMember(dest => dest.OwnerId, opt => opt.MapFrom(src => src.Owner.Id))
                .ForMember(dest => dest.OwnerId, opt => opt.MapFrom(src => src.Owner.Id))
                .ForMember(dest => dest.PricePerNight, opt => opt.MapFrom(src => src.PricePerNight));

            // House → HouseDetailsDto
            CreateMap<House, HouseDetailsDto>()
             .ForMember(dest => dest.Images, opt => opt.MapFrom(src => src.Images))
             .ForMember(dest => dest.Reviews, opt => opt.MapFrom(src => src.Reviews))
             .ForMember(dest => dest.Bookings, opt => opt.MapFrom(src => src.Bookings))
             .ForMember(dest => dest.OwnerId, opt => opt.MapFrom(src => src.Owner.Id))
             .ForMember(dest => dest.TenantId,
                opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Id.ToString() : null));




            // HouseImage → HouseImageDto
            CreateMap<HouseImage, HouseImageDto>();

            // Review → ReviewDto
            CreateMap<Review, ReviewDto>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.User.Id));

            // Booking → BookingDto
            CreateMap<Booking, BookingDto>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.User.Id));

            // ApplicationUser → UserDto
            //CreateMap<User, UserDto>();

            //// ApplicationUser → UserDetailsDto
            //CreateMap<User, UserDetailsDto>()
            //    .ForMember(dest => dest.OwnedHouses, opt => opt.MapFrom(src => src.OwnedHouses))
            //    .ForMember(dest => dest.Bookings, opt => opt.MapFrom(src => src.Bookings));
        }
    }
}
