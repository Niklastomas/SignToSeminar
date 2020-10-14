using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignToSeminar_Backend.Models;
using SignToSeminar_Backend.ViewModel;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SignToSeminar_Backend.Controllers
{
   
    [Route("api/[controller]")]
    [EnableCors("CORSPolicy")]
    [ApiController]
    public class SeminarController : ControllerBase
    {
        //GET: api/<SeminarController>
        [EnableCors ("AnotherPolicy")]
        [HttpGet]
        public IEnumerable<Seminar> Get()
        {
            using (var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.ToArray();
                return seminar;

            }
        }

        // GET api/<SeminarController>/5
        [HttpGet("{id:int}")]
        public Seminar Get(int id)
        {
            using (var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.Where(s => s.SeminarId == id).FirstOrDefault();

                return seminar;
            }       
        }
        
        [HttpGet("{title}")]
        public IEnumerable<Seminar> Get(string title)
        {
            using (var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.Where(s => s.Title == title).ToArray();

                return seminar;
            }


        }

        [HttpGet("{date:DateTime}")]
        public IEnumerable<Seminar> Get(DateTime date)
        {
            using (var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.Where(s => s.Date >= date).ToArray();

                return seminar;
            }
        }


        // POST api/<SeminarController>
        [HttpPost]
        public void Post([FromBody] SeminarViewModel s)
        {
         
            using( var context = new ApplicationDbContext())
            {
                var newSeminar = new Seminar { Title = s.Title, Date = s.Date, Location = s.Location};
                context.Seminars.Add(newSeminar);
                context.SaveChanges();
                
            }
            
        }

        // PUT api/<SeminarController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] SeminarViewModel seminarVM)
        {
            using (var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.Where(s => s.SeminarId == id).FirstOrDefault();

                if (seminar != null)
                {
                    if(seminar.Title != seminarVM.Title)
                    {
                        seminar.Title = seminarVM.Title;
                        context.SaveChanges();
                    }
                    else if(seminar.Date != seminarVM.Date)
                    {
                        seminar.Date = seminarVM.Date;
                        context.SaveChanges();
                    }
                    else if (seminar.Location != seminarVM.Location)
                    {
                        seminar.Location = seminarVM.Location;
                        context.SaveChanges();
                    }
                    else
                    {
                        seminar.Title = seminarVM.Title;
                        seminar.Date = seminarVM.Date;
                        seminar.Location = seminarVM.Location;
                        context.SaveChanges();
                    }
                }
                else
                {
                    return "Not Found";

                }
            }

            return "Ok";

        }

        // DELETE api/<SeminarController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            using(var context = new ApplicationDbContext())
            {
                var seminar = context.Seminars.Where(s => s.SeminarId == id).FirstOrDefault();

                if (seminar != null)
                {
                    context.Seminars.Remove(seminar);
                    context.SaveChanges();
                }
                else
                {
                    return "Not Found";
                }
                return "Ok";
            }
        }
    }
}
