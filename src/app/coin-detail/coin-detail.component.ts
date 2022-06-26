import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import {ChartConfiguration, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coinData:any;
  coinId!: number;
  days: number=1;
  currency : string = "INR";
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  public lineChartType: ChartType = 'line';


  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId = val['id'];
    })
    this.getCoinData()
  }
  getCoinData(){
    this.api.getCurrencyById(this.coinId).subscribe(res=>{
      this.coinData = res;
      console.log(this.coinData)
    })
  }
  // getGraphData(){
  //   this.api.getGraphicalCurrencyData((this.coinId, "THB", 1).subscribe(res=>{
  //     console.log(res);
  //   })
  // }

}
