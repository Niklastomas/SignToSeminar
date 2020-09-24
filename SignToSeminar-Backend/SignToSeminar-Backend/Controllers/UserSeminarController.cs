using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignToSeminar_Backend.Models;



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
                var userSeminar = context.UserSeminars.Include(u => u.User).Include(u => u.Seminar).ToArray();
                return userSeminar;
            }
        }

        // GET api/<UserSeminarController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
