import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
    let x = <FormArray> this.contactForm.get('phones') as FormArray;
    // console.log("x is " + JSON.stringify(x));
    return x; 
  }
  addPhone(g) {
    this.phones.push(this.formBuilder.control(g));
  }
  contactForm = this.formBuilder.group({

    firstName: [''],
    middleName: [''],
    lastName: [''],
    birthDay: [''],
    phones: this.formBuilder.array([this.buildPhonesGroup()]),
    addresses: this.buildAddressGroup(),
    emails: this.buildEmailsGroup()
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ContactsService,
    private formBuilder: FormBuilder) { }


  buildEmailsGroup(): any {
    return this.formBuilder.group({
      emailTitle: [''],
      emailId: ['']
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
        this.contactForm.patchValue({
          firstName: this.contact.firstName,
          middleName: this.contact.middleName,
          lastName: this.contact.lastName,
          birthDay: this.contact.birthDay,
              address: this.contact.addresses,
          emails: this.contact.emails
        });
        

        this.contact.phones.forEach(phone => {
          this.addPhone(phone);
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
