﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SignToSeminar_Backend.Models;

namespace SignToSeminar_Backend.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200924120620_CreateDB4")]
    partial class CreateDB4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SignToSeminar_Backend.Models.Seminar", b =>
                {
                    b.Property<int>("SeminarId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SeminarId");

                    b.ToTable("Seminars");
                });

            modelBuilder.Entity("SignToSeminar_Backend.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SignToSeminar_Backend.Models.UserSeminar", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("SeminarId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "SeminarId");

                    b.HasIndex("SeminarId");

                    b.ToTable("UserSeminars");
                });

            modelBuilder.Entity("SignToSeminar_Backend.Models.UserSeminar", b =>
                {
                    b.HasOne("SignToSeminar_Backend.Models.Seminar", "Seminar")
                        .WithMany("UserSeminars")
                        .HasForeignKey("SeminarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SignToSeminar_Backend.Models.User", "User")
                        .WithMany("UserSeminars")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}