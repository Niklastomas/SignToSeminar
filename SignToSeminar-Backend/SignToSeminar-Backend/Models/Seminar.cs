using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.Models
{
    public class Seminar
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Date { get; set; }
        public string Location { get; set; }
        public List<User> UserList { get; set; }

    }
}
