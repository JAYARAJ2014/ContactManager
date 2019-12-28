using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactManager.Data;
using ContactManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;

namespace ContactManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {

        private readonly ILogger<ContactsController> _logger;
        private readonly DataContext _context;

        public ContactsController(ILogger<ContactsController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("test")]
        public ActionResult<Contact> GetSampleContact()
        {
            var address1 = new Address
            {
                AddressTitle = "Home",
                Street = "123 Some Street",
                City = "Some City",
                Country = "Some Country",
                ZipCode = "9876567"
            };
            var address2 = new Address
            {
                AddressTitle = "Office",
                Street = "100 Technology Dr",
                City = "Cyber City",
                Country = "Some Country",
                ZipCode = "9876567"
            };

            var cell = new Phone { PhoneTitle = "Cell", PhoneNumber = "919.765.3456" };
            var work = new Phone { PhoneTitle = "Work", PhoneNumber = "919.908.1234" };

            var personal = new Email { EmailTitle = "Personal", EmailId = "john.doe@me.com" };
            var workEmail = new Email { EmailTitle = "Work", EmailId = "john.doe@work.com" };
            var contact = new Contact
            {

                FirstName = "John",
                LastName = "Doe",
                MiddleName = "Samuel",
                BirthDay = "Jan 1990"
            };

            contact.Phones.Add(cell);
            contact.Phones.Add(work);
            contact.Addresses.Add(address2);
            contact.Addresses.Add(address1);
            contact.Emails.Add(personal);
            contact.Emails.Add(workEmail);
            return Ok(contact);
        }
        [HttpGet]
        public ActionResult<List<Contact>> GetAllContacts()
        {
            return Ok(_context.Contacts.Find(c => true).ToList<Contact>());
        }

        [HttpGet("{id}")]
        public ActionResult<Contact> GetContactById(string id)
        {
            return _context.Contacts.Find<Contact>(c => c.Id == id).FirstOrDefault();
        }

        [HttpPut]
        public ActionResult<Contact> CreateContact(Contact contact)
        {
            _context.Contacts.InsertOne(contact);
            return Created($"/{contact.Id}", contact);
        }

        [HttpPost]
        public ActionResult UpdateCotnact(string id, Contact contact)
        {
            return Ok("");
        }

        [HttpDelete]
        public ActionResult DeleteContact(string id)
        {
            return NoContent();
        }
    }
}
