using ContactManager.Models;
using MongoDB.Driver;

namespace ContactManager.Data
{

    //Jay: This class is used as a facade to .NET Core and MongoDB
    //Jay: This is somewhat mimicing  EF DbContext
    public class DataContext
    {

        private readonly IContactManagerDbSettings _settings;
        public IMongoDatabase Database { get; set; }
        public DataContext(IContactManagerDbSettings settings)
        {
            _settings = settings;
            var mongoClient = new MongoClient(_settings.ConnectionSting);
            Database = mongoClient.GetDatabase(_settings.DatabaseName);
        }


//Jay: Expose MongoCollection as Read-Only Collection
        public IMongoCollection<Contact> Contacts
        {
            get
            {
                return Database.GetCollection<Contact>(_settings.CollectionName);
            }
        }
    }


}