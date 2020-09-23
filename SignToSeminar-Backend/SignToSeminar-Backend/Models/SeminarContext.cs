using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.Models
{
    public class SeminarContext : DbContext
    {
       
            public DbSet<Seminar> Seminars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=SignToSeminar;Trusted_Connection=True;");

        }

    }
}
