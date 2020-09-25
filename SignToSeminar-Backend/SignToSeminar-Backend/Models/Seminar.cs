using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.Models
{
    public class Seminar
    {
      
        public int SeminarId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }

        public IList<UserSeminar> UserSeminars { get; set; }

    }
}
