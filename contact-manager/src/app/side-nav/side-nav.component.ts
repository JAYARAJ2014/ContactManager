import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor( private router: Router) { }

  sideNavOpened = true;
  sideNavMode = "side";

  ngOnInit() {

  
  }

  allContactsClicked(){
    this.router.navigate(['/contacts']);
    console.log('All Contacts clicked');
  }

}
