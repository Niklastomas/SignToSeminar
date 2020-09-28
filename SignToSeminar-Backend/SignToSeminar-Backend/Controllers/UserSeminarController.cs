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
        [HttpGet("user/{id:int}")]
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


        [HttpGet ("seminar/{title}")]
        public SeminarViewModel Get(string title)
        {
            using (var context = new ApplicationDbContext())
            {
                var users = new List<User>();

                var seminar = context.UserSeminars.Where(s => s.Seminar.Title == title).Include(s => s.Seminar).FirstOrDefault();

                var seminarVM = new SeminarViewModel
                {
                    Title = seminar.Seminar.Title,
                    Date = seminar.Seminar.Date,
                    Location = seminar.Seminar.Location
                };


                var userSeminars = context.UserSeminars.Where(s => s.Seminar.Title == title).Include(s => s.User).ToArray();

                foreach (var userSeminar in userSeminars)
                {
                    if (userSeminar.Seminar != null)
                    {
                        users.Add(userSeminar.User);

                    }

                }
                seminarVM.UserList = users;

                return seminarVM;

            }
        }

        // POST api/<UserSeminarController>
        [HttpPost]
        public void Post([FromBody] UserSeminarViewModel us)
        {
            using(var context = new ApplicationDbContext())
            {
                var userSeminar = new UserSeminar
                {
                    SeminarId = us.SeminarId,
                    UserId = us.UserId
                };

                context.UserSeminars.Add(userSeminar);
                context.SaveChanges();
            }
       
        }

        // PUT api/<UserSeminarController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserSeminarController>/5
        [HttpDelete]
        public string Delete(UserSeminarViewModel us)
        {
            using(var context = new ApplicationDbContext())
            {
                var userSeminar = context.UserSeminars.Where(x => x.SeminarId == us.SeminarId).Where(y => y.UserId == us.UserId).FirstOrDefault();
                
                if(userSeminar != null)
                {
                    context.UserSeminars.Remove(userSeminar);
                    context.SaveChanges();
                    return "Ok";
                } 
                else
                {
                    return "Not Found";
                }
            }
        }
    }
}
