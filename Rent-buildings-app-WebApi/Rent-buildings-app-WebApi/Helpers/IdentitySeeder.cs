using DataAccess.Data.Entities;
using Microsoft.AspNetCore.Identity;

namespace Rent_buildings_app_WebApi.Helpers
{
    public static class IdentitySeeder
    {
        public static class Roles
        {
            public const string ADMIN = "admin";
            public const string OWNER = "owner";
            public const string USER = "user";
        }
        public static class IdentityInitializer
        {
            public static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
            {
                //var roleManager = app.GetRequiredService<RoleManager<IdentityRole>>();

                if (!await roleManager.RoleExistsAsync(Roles.ADMIN))
                    await roleManager.CreateAsync(new(Roles.ADMIN));

                if (!await roleManager.RoleExistsAsync(Roles.OWNER))
                    await roleManager.CreateAsync(new(Roles.OWNER));

                if (!await roleManager.RoleExistsAsync(Roles.USER))
                    await roleManager.CreateAsync(new(Roles.USER));
            }

            public static async Task SeedAdminAsync(UserManager<User> userManager)
            {
                //var userManager = app.GetRequiredService<UserManager<User>>();

                const string USERNAME = "admin@ukr.net";
                const string PASSWORD = "Qwer-1234";

                var existingUser = await userManager.FindByNameAsync(USERNAME);

                if (existingUser == null)
                {
                    var user = new User
                    {
                        UserName = USERNAME,
                        Email = USERNAME,
                    };

                    var result = await userManager.CreateAsync(user, PASSWORD);

                    if (result.Succeeded)
                        await userManager.AddToRoleAsync(user, Roles.ADMIN);
                }
            }

        }

        //public static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
        //{
        //    string[] roles = { "Admin", "User", "Owner" };

        //    foreach (var role in roles)
        //    {
        //        if (!await roleManager.RoleExistsAsync(role))
        //        {
        //            await roleManager.CreateAsync(new IdentityRole(role));
        //        }
        //    }
        //}

    }
}
