## Sample JSON input


`

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


`


### API Urls

GET --Retreive Specific
https://localhost:5001/Contacts/5e06cca053d0aa2d2cf532a1

PUT -- Create. Return 201 with new Url.
https://localhost:5001/Contacts

GET  --Gets All
https://localhost:5001/Contacts 

