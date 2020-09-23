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
    public class SeminarController : ControllerBase
    {
        // GET: api/<SeminarController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SeminarController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SeminarController>
        [HttpPost]
        public void Post([FromBody] SeminarViewModel s)
        {
         
            using( var context = new SeminarContext())
            {
                var newSeminar = new Seminar { Title = s.Title, Date = s.Date, Location = s.Location };
                context.Seminars.Add(newSeminar);
                context.SaveChanges();
                
            }
            
        }

        // PUT api/<SeminarController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SeminarController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
