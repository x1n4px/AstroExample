import { Component, Input } from '@angular/core';
import { C1Component } from '../component/chart/c1/c1.component';
import { C2Component } from '../component/chart/c2/c2.component';
import { C3Component } from '../component/chart/c3/c3.component';
import { C4Component } from '../component/chart/c4/c4.component';
import { C5Component } from '../component/chart/c5/c5.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [C1Component, C2Component, C3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  c1Control = false;
  c2Control = false;
  c3Control = false;

  constructor(private route: Router) { }


  openComponent(arg0: any) {
    this.route.navigate([arg0]);
  }



}
