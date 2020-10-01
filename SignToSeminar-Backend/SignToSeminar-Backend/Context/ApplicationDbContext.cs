using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.Models
{
    public class ApplicationDbContext : DbContext
    {
     
        public DbSet<Seminar> Seminars { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserSeminar> UserSeminars { get; set; }

        //CONNECTIONSTRING TO DATABASE
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=SignToSeminar;Trusted_Connection=True;");
        }

        //MANY - TO - MANY
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserSeminar>().HasKey(us => new { us.UserId, us.SeminarId });
        }

    }
}
