using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ContactManager.Models
{

    //Jay: This class is purposely made complex to test out the behaviour of complex object model. Real-time objects aregoing to be even more complex.


    public class Contact
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string BirthDay { get; set; }
        public List<Phone> Phones { get; set; }
        public List<Address> Addresses { get; set; }
        public List<Email> Emails { get; set; }
        public Contact()
        {
            Phones = new List<Phone>();
            Addresses = new List<Address>();
            Emails = new List<Email>();
        }
    }
}