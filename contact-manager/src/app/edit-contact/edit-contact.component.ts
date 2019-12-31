import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { IContact } from '../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: IContact;
  get phones() {
    return <FormArray>this.contactForm.get('phones') as FormArray;
  }
  get emails() {
    return <FormArray>this.contactForm.get('emails') as FormArray;
  }
  get addresses() {
    return <FormArray>this.contactForm.get('addresses') as FormArray;
  }

  addPhones() {
    this.phones.push(this.buildPhonesGroup());
  }
  addEmails() {
    this.emails.push(this.buildEmailsGroup());
  }
  addAddresses() {
    this.addresses.push(this.buildAddressGroup());
  }
  contactForm = this.formBuilder.group({

    firstName: ['',[Validators.required, Validators.minLength(4)]],
    middleName: [''],
    lastName: ['',[Validators.required, Validators.minLength(4)]],
    birthDay: [''],
    phones: this.formBuilder.array([]),
    addresses: this.formBuilder.array([]),
    emails: this.formBuilder.array([])
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ContactsService,
    private formBuilder: FormBuilder) { }


  buildEmailsGroup(): any {
    return this.formBuilder.group({
      emailTitle: [''],
      emailId: ['',Validators.email]
    });
  }

  buildAddressGroup(): FormGroup {
    return this.formBuilder.group({
      addressTitle: [''],
      street: [''],
      city: [''],
      zipCode: [''],
      state: [''],
      country: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('Param from route= ' + id);
    this.service.getContactById(id).subscribe(
      (result) => {
        this.contact = result;
        console.log('this.contact=' + JSON.stringify(this.contact));
        this.contact.phones.forEach(phone => {
          this.addPhones();
        });

        this.contact.emails.forEach(email => {
          this.addEmails();
        });

        this.contact.addresses.forEach(address => {
          this.addAddresses();
        });

        this.contactForm.patchValue({
          firstName: this.contact.firstName,
          middleName: this.contact.middleName,
          lastName: this.contact.lastName,
          birthDay: this.contact.birthDay,
          addresses: this.contact.addresses,
          emails: this.contact.emails,
          phones: this.contact.phones,
        });




      }
    );
    console.log(this.contactForm);
  }

  onSubmit() {
    console.log(this.contact);
    console.log(this.contactForm.value);
    console.log('save clicked');
  }

  goBackToList() {
    this.router.navigate(['/contacts']);
  }

  buildPhonesGroup(): FormGroup {
    return this.formBuilder.group({
      phoneTitle: 'Cell',
      countryCode: [''],
      phoneNumber: ['']
    });
  }
}
