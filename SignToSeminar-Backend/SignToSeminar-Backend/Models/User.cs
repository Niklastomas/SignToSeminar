using System.Collections.Generic;

namespace SignToSeminar_Backend.Models
{
    public class User
    {
      
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public IList<UserSeminar> UserSeminars { get; set; }



    }
}