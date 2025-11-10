using AutoMapper;
using DataAccess.Data.Entities;
using DataAccess.Data;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuisnessLogic.DTOs.Accounts;
using System.Net;
using BuisnessLogic.Interfaces;
using System.Data;

namespace BuisnessLogic.Services
{
    public class AccountsService : IAccountsService
    {
        private readonly UserManager<User> userManager; 
        private readonly SignInManager<User> signInManager; 
        private readonly IMapper mapper; private readonly HouseRentDbContext ctx; 
        public AccountsService(
            UserManager<User> userManager, 
            SignInManager<User> signInManager, 
            IMapper mapper, 
            HouseRentDbContext ctx) 
        
        { 
            this.userManager = userManager;
            this.signInManager = signInManager; 
            this.mapper = mapper; 
            this.ctx = ctx; 
        }
        public async Task Register(RegisterModel model)
        {
            var user = mapper.Map<User>(model);

            var result = await userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                throw new HttpException(result.Errors?.FirstOrDefault()?.Description ?? "Error", HttpStatusCode.BadRequest);

            var roleExists = await userManager.IsInRoleAsync(user, model.Role);
            if (!roleExists)
            {
                // додаємо користувача у роль
                await userManager.AddToRoleAsync(user, model.Role);
            }
        }
        public async Task Login(LoginModel model, string? ipAddress)
        {
            var user = await userManager.FindByEmailAsync(model.Email);

            if (user == null || !await userManager.CheckPasswordAsync(user, model.Password))
                throw new HttpException("Invalid email or password.", HttpStatusCode.BadRequest);
            //if (roles.Contains("admin"))
            //{
            //    // Можеш відзначити в сесії, що це адмін
            //    // Наприклад: створити токен із позначкою "admin"
            //}
            //else if (roles.Contains("owner"))
            //{
            //    // Теж саме для власника будинку
            //}
            //else
            //{
            //    // Звичайний користувач
            //}

            await ctx.SaveChangesAsync();
        }
        public async Task Logout(LogoutModel model)
        {
            await signInManager.SignOutAsync();
        }

    }
}
