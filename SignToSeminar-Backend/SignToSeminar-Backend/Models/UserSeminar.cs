using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignToSeminar_Backend.Models
{
    public class UserSeminar
    {
        public int UserId { get; set; }
        public User User { get; set;  }

        public int SeminarId { get; set; }

        public Seminar Seminar { get; set; }
    }
}
