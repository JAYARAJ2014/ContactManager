import { Component, OnInit } from '@angular/core';
import { CotactsService } from '../cotacts.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private contactService: CotactsService) { }

  sideNavOpened = true;
  sideNavMode = "side";

  ngOnInit() {

    this.contactService.getAllContacts().subscribe(
      (r) => {
        console.log(r);
      });
  }

}
