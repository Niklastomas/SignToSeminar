using SignToSeminar_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.ViewModel
{
    public class SeminarViewModel
    {
        public string Title { get; set; }

        public DateTime Date { get; set; }
        public string Location { get; set; }
        public List<User> UserList { get; set; }
    }
}
