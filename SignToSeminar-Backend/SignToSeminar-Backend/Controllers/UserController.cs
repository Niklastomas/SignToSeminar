using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SignToSeminar_Backend.Models;
using SignToSeminar_Backend.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SignToSeminar_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            using (var context = new ApplicationDbContext())
            {

                var user = context.Users.ToList();
                return user;
                
            }
        }




        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public IEnumerable<UserSeminar> Get(int id)
        {
           using (var context = new ApplicationDbContext())
            {

                var userSeminars = context.UserSeminars.Where(user => user.UserId == id).ToList();
              
                return userSeminars;
            }
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] UserViewModel u)
        {

            using (var context = new ApplicationDbContext())
            {
                var newUser = new User { FirstName = u.FirstName, LastName = u.LastName };
                context.Users.Add(newUser);
                context.SaveChanges();

            }
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] UserViewModel userVM)
        {
           using(var context = new ApplicationDbContext())
            {
                var user = context.Users.Where(user => user.UserId == id).FirstOrDefault<User>();

                if (user != null)
                {
                    user.FirstName = userVM.FirstName;
                    user.LastName = userVM.LastName;
                    context.SaveChanges();
                }
                else
                {
                    return "Not Found";

                }
            }

            return "Ok";

        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
