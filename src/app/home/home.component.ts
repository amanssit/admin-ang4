import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
        this.optionsline = {
            chart: { type: 'line' },
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2,25,26,2,28,15],
            }]
        };
        this.optionsspline = {
            chart: { type: 'spline' },
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2,25,26,2,28,15],
            }]
        };
        this.optionspie = {
            chart: { type: 'pie' },
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2,25,26,2,28,15],
            }]
        };
        this.optionscolumn = {
            chart: { type: 'column' },
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2,25,26,2,28,15],
            }]
        };
    }
    optionsspline: Object;
    optionsline: Object;
    optionspie: Object;
    optionscolumn: Object;

  ngOnInit() {
  }

}
