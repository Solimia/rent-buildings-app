using BuisnessLogic.Configurations;
using BuisnessLogic.Interfaces;
using BuisnessLogic.Services;
using DataAccess.Data;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Rent_buildings_app_WebApi;
using Microsoft.AspNetCore.Identity;
using Rent_buildings_app_WebApi.Helpers;

using DataAccess.Data.Entities;
using static Rent_buildings_app_WebApi.Helpers.IdentitySeeder;

var builder = WebApplication.CreateBuilder(args);

string connStr = builder.Configuration.GetConnectionString("Remotedb")
    ?? throw new Exception("No Connection String found.");


builder.Services.AddDbContext<HouseRentDbContext>(options =>
    options.UseSqlServer(connStr));

builder.Services.AddIdentity<User, IdentityRole>(options =>
    options.SignIn.RequireConfirmedAccount = false)
    .AddDefaultTokenProviders()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<HouseRentDbContext>();
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAutoMapper(cfg => { }, typeof(MapperProfile));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IHouseService, HouseService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IAccountsService, AccountsService>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

    await IdentityInitializer.SeedRolesAsync(roleManager);
    await IdentityInitializer.SeedAdminAsync(userManager);
}



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ErrorHandlerMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
