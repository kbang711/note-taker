import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pageTitle: string = 'Welcome';

  ngOnInit() {
    
  }
}
