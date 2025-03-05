import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-c1',
  imports: [BaseChartDirective],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  @Input() c1Control: boolean = true;
  public SystemName: string = "MF1";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 1,8,49];

  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["2018-01-29 10:00:00", "2018-01-29 10:27:00", "2018-01-29 10:28:00"];

  constructor( private route: Router ) { }

  public lineChartOptions: any = {
    responsive: true,

    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
        }
      }],
      xAxes: [{


        }],
    },
      plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red'
      }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }



  navigateTo(item?:any) {
    if(item === '') {
      this.route.navigate([item])
    }
  }

}
