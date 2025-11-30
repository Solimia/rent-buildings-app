using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddReviewSeeder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HouseReviews_Users_UserId1",
                table: "HouseReviews");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_HouseReviews_UserId1",
                table: "HouseReviews");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "HouseReviews");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "HouseReviews",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Comment",
                table: "HouseReviews",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Bookings",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.InsertData(
                table: "HouseReviews",
                columns: new[] { "Id", "Comment", "CreatedAt", "HouseId", "Rating", "UserId" },
                values: new object[,]
                {
                    { 1, "Гарний просторий будинок, все супер!", new DateTime(2025, 11, 30, 9, 55, 52, 17, DateTimeKind.Local).AddTicks(9473), 1, 5, "1" },
                    { 2, "Все добре, але поганий інтернет.", new DateTime(2025, 11, 30, 9, 25, 52, 17, DateTimeKind.Local).AddTicks(9698), 2, 4, "1" },
                    { 3, "Чисто, затишно, рекомендую!", new DateTime(2025, 11, 30, 6, 55, 52, 17, DateTimeKind.Local).AddTicks(9716), 3, 5, "1" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_HouseReviews_UserId",
                table: "HouseReviews",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_HouseReviews_Users_UserId",
                table: "HouseReviews",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HouseReviews_Users_UserId",
                table: "HouseReviews");

            migrationBuilder.DropIndex(
                name: "IX_HouseReviews_UserId",
                table: "HouseReviews");

            migrationBuilder.DeleteData(
                table: "HouseReviews",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "HouseReviews",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "HouseReviews",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "HouseReviews",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Comment",
                table: "HouseReviews",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "HouseReviews",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Bookings",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HouseId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reviews_Houses_HouseId",
                        column: x => x.HouseId,
                        principalTable: "Houses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reviews_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HouseReviews_UserId1",
                table: "HouseReviews",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_HouseId",
                table: "Reviews",
                column: "HouseId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_HouseReviews_Users_UserId1",
                table: "HouseReviews",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
