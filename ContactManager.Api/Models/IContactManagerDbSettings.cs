namespace ContactManager.Models
{

//We need this interface because we plan to inject this the Dbsettings through the DI container.
    public interface IContactManagerDbSettings
    {
        string CollectionName { get; set; }
        string ConnectionSting { get; set; }
        string DatabaseName { get; set; }
    }
}