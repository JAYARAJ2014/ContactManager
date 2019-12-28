namespace ContactManager.Models
{

    public class ContactManagerDbSettings : IContactManagerDbSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionSting { get; set; }
        public string DatabaseName { get; set; }
    }

}