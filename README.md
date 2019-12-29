# Contact Manager
## Current Status: Work-In-Progress;
### A Sample application that uses Angular 8.* + Material, .NET Core 3.* and Mongo DB. 
#### First phase is building the API.

`dotnet add package MongoDB.Driver`  This driver encapuslates all necessary operatoins.

Create MongoClient

Create Database by calling MongoClient.GetDatabase(<DatabaseName>)

Database.GetCollection<ModelName>("_collectionName_") to retreive the collection.

Collection.Find(x=>true) returns all documents in the collection

Collection.Find(x => x.Id == <idparameter>) retruns a specific document

Collection.InsertOne(<Object>) inserts the given object in to the collection. (Document gets created)

Refer to the DataContext and ContactsController for implementation.

## Sample JSON input


```

{
  
    "firstName": "John",
    "middleName": "Samuel",
    "lastName": "Doe",
    "birthDay": "Jan 1990",
    "phones": [
        {
            "phoneTitle": "Cell",
            "countryCode": null,
            "phoneNumber": "919.765.3456"
        },
        {
            "phoneTitle": "Work",
            "countryCode": null,
            "phoneNumber": "919.908.1234"
        }
    ],
    "addresses": [
        {
            "addressTitle": "Office",
            "street": "100 Technology Dr",
            "city": "Cyber City",
            "zipCode": "9876567",
            "state": null,
            "country": "Some Country"
        },
        {
            "addressTitle": "Home",
            "street": "123 Some Street",
            "city": "Some City",
            "zipCode": "9876567",
            "state": null,
            "country": "Some Country"
        }
    ],
    "emails": [
        {
            "emailTitle": "Personal",
            "emailId": "john.doe@me.com"
        },
        {
            "emailTitle": "Work",
            "emailId": "john.doe@work.com"
        }
    ]
}


```
### Additional considerations
CORS is enabled to the specified origin. (This should not be hard coded in realstic apps)

### API Urls

- GET --Retreive Specific
https://localhost:5001/Contacts/5e06cca053d0aa2d2cf532a1

- POST -- Create. Return 201 with new Url.
https://localhost:5001/Contacts

- GET  --Gets All
https://localhost:5001/Contacts 

- PUT -- UPDATE. Return 200.
https://localhost:5001/Contacts/5e07a6898adf0a52b8ae6e27

- DELETE -- DELETE. Return 204 No Content.
https://localhost:5001/Contacts/5e07a6898adf0a52b8ae6e27

A good tutorial on MongoDB - ASP.NET Core Can be found here: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-3.1&tabs=visual-studio


### Front-end implementation. 
Created angular project
Added angular material using schematic ng add @angular\material
created a sidenav component that implements material side nav. No logic here. Only navigation.
Create a mat-tool bar only to give a top tool bar and heading in the layout. Again, no logic here. No navigation either

created a contact model . (models folder)
created a contacts service (Invokes HTTP Service and returns observables)

Created a component contact-list. On the init life cycle hook added a call to the contact-service


### To run the applicaton

navigate to the folder ContactManager.Api and issue the command `dotnet run`
navigate to the folder contact-manager and issue the command `ng serve`