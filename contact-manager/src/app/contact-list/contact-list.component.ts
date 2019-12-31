import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { IContact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactsService, ) { }
  dataSource: IContact[];
  showSpinner = false; 
  columnsToDisplay = ['firstName', 'middleName', 'lastName','action'];


  ngOnInit() {
    this.showSpinner = true; 
    this.contactService.getAllContacts().subscribe(
      (r) => {
        console.log(r);
        this.dataSource = r;
      });
      this.showSpinner = false; 
  }

}
