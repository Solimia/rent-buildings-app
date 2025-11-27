using BuisnessLogic.DTOs.Accounts;
using BuisnessLogic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Rent_buildings_app_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountsService accountsService;
        private string? CurrentIp => HttpContext.Connection.RemoteIpAddress?.ToString();

        public AccountsController(IAccountsService accountsService)
        {
            this.accountsService = accountsService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            await accountsService.Register(model);
            return Ok();
        }

        [HttpGet("getusers")]
        public async Task<IActionResult> GetUseres()
        {
            
            return Ok(await accountsService.GetUsers());
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            await accountsService.Login(model, CurrentIp);
            return Ok();
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout(LogoutModel model)
        {
            await accountsService.Logout(model);
            return Ok();
        }
    }
}
