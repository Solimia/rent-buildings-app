using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdateHouseEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MainimgUrl",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 1,
                column: "MainimgUrl",
                value: "https://zhzh.info/_pu/104/86083546.jpg");

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 2,
                column: "MainimgUrl",
                value: "https://media.decorateme.com/images/1c/ee/e1/moshchenie-bruschatkoi-vygliadit-estestvenno-i-organichno.webp");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MainimgUrl",
                table: "Houses");
        }
    }
}
