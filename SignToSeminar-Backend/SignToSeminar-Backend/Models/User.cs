using System.Collections.Generic;

namespace SignToSeminar_Backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? SeminarId { get; set; }


        

    }
}