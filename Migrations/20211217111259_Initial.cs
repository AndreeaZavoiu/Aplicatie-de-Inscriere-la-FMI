using Microsoft.EntityFrameworkCore.Migrations;

namespace InscrieriStudenti.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ani",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdStudent = table.Column<int>(type: "int", nullable: false),
                    IdCurs = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ani", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ZiCurs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdCurs = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZiCurs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Studenti",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prenume = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AniId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Studenti", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Studenti_Ani_AniId",
                        column: x => x.AniId,
                        principalTable: "Ani",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Cursuri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZiCursId = table.Column<int>(type: "int", nullable: true),
                    AniId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cursuri", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cursuri_Ani_AniId",
                        column: x => x.AniId,
                        principalTable: "Ani",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Cursuri_ZiCurs_ZiCursId",
                        column: x => x.ZiCursId,
                        principalTable: "ZiCurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CamereCamin",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdStudent = table.Column<int>(type: "int", nullable: false),
                    Etaj = table.Column<int>(type: "int", nullable: false),
                    Suprafata = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CamereCamin", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CamereCamin_Studenti_IdStudent",
                        column: x => x.IdStudent,
                        principalTable: "Studenti",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Catalog",
                columns: table => new
                {
                    IdStudent = table.Column<int>(type: "int", nullable: false),
                    IdCurs = table.Column<int>(type: "int", nullable: false),
                    An = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Catalog", x => new { x.IdStudent, x.IdCurs });
                    table.ForeignKey(
                        name: "FK_Catalog_Cursuri_IdCurs",
                        column: x => x.IdCurs,
                        principalTable: "Cursuri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Catalog_Studenti_IdStudent",
                        column: x => x.IdStudent,
                        principalTable: "Studenti",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CamereCamin_IdStudent",
                table: "CamereCamin",
                column: "IdStudent",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Catalog_IdCurs",
                table: "Catalog",
                column: "IdCurs");

            migrationBuilder.CreateIndex(
                name: "IX_Cursuri_AniId",
                table: "Cursuri",
                column: "AniId");

            migrationBuilder.CreateIndex(
                name: "IX_Cursuri_ZiCursId",
                table: "Cursuri",
                column: "ZiCursId");

            migrationBuilder.CreateIndex(
                name: "IX_Studenti_AniId",
                table: "Studenti",
                column: "AniId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CamereCamin");

            migrationBuilder.DropTable(
                name: "Catalog");

            migrationBuilder.DropTable(
                name: "Cursuri");

            migrationBuilder.DropTable(
                name: "Studenti");

            migrationBuilder.DropTable(
                name: "ZiCurs");

            migrationBuilder.DropTable(
                name: "Ani");
        }
    }
}
