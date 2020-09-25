using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignToSeminar_Backend.Models;
using SignToSeminar_Backend.ViewModel;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SignToSeminar_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSeminarController : ControllerBase
    {
        // GET: api/<UserSeminarController>
        [HttpGet]
        public IEnumerable<UserSeminar> Get()
        {
            using(var context = new ApplicationDbContext())
            {
                var userSeminars = context.UserSeminars.Include(u => u.User).Include(u => u.Seminar).ToArray();
                return userSeminars;


            }
        }

        // GET api/<UserSeminarController>/5
        [HttpGet("user/{id}")]
        public UserViewModel Get(int id)
        {
            using(var context = new ApplicationDbContext())
            {
                var seminars = new List<Seminar>();

                var user = context.UserSeminars.Where(u => u.UserId == id).Include(u => u.User).FirstOrDefault();

                var userVM = new UserViewModel
                {
                    FirstName = user.User.FirstName,
                    LastName = user.User.LastName
                };


                var userSeminars = context.UserSeminars.Where(u => u.UserId == id).Include(u => u.Seminar).ToArray();
                
                foreach (var userSeminar in userSeminars)
                {
                    if (userSeminar.Seminar != null)
                    {
                        seminars.Add(userSeminar.Seminar);

                    }
                    
                }
                userVM.SeminarList = seminars;
                
                return userVM;

            }
        }

        // POST api/<UserSeminarController>
        [HttpPost]
        public void Post([FromBody] UserSeminar us)
        {
          
       
        }

        // PUT api/<UserSeminarController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserSeminarController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
