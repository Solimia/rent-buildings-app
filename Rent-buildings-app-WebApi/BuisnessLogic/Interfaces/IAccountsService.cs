using BuisnessLogic.DTOs.Accounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Interfaces
{
    public interface IAccountsService
    {
        Task Register(RegisterModel model);
        Task Login(LoginModel model, string? ipAddress);
        Task Logout(LogoutModel model);
    }
}
