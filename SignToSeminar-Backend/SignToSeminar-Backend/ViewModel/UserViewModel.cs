using SignToSeminar_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.ViewModel
{
    public class UserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Seminar> SeminarList { get; set; }

    }
}
