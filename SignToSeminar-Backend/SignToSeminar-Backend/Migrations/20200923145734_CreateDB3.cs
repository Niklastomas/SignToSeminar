using Microsoft.EntityFrameworkCore.Migrations;

namespace SignToSeminar_Backend.Migrations
{
    public partial class CreateDB3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Seminars_SeminarId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "SeminarId",
                table: "Users",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Seminars_SeminarId",
                table: "Users",
                column: "SeminarId",
                principalTable: "Seminars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Seminars_SeminarId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "SeminarId",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Seminars_SeminarId",
                table: "Users",
                column: "SeminarId",
                principalTable: "Seminars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
