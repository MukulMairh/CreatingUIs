import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.scss']
})
export class UI1Component implements OnInit {

  constructor() { }
  imageString = "assets/loginGateGreen.png";
  // loginGateGreen

  ngOnInit(): void {
  }

}
