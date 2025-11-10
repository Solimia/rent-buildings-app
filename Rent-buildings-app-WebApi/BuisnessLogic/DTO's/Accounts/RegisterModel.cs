namespace BuisnessLogic.DTOs.Accounts
{
    public class RegisterModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime? Birthdate { get; set; }

        public string Role { get; set; } = "user";
    }
}
