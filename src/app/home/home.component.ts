import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid19Service } from '../services/covid19.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  queryDate = "8/31/20";
  nrCases=0;
  nrDeaths=0;
  nrRecovered=0;
  provinces= [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon Territory"
  ];

  covidService: Covid19Service;
  constructor(covid19Service: Covid19Service) {
    this.covidService = covid19Service
   }

  ngOnInit(): void {
    this.provinceSelected(this.provinces[0]);
   }

  getStats(province){
    this.covidService.getCovidCasesByProvice(province)
    .subscribe((data : CovidData) => {
      console.log(data);
      this.resetCounts();
      if(data){

        this.nrCases=data?.timeline.cases[this.queryDate];
        this.nrRecovered=data?.timeline.recovered[this.queryDate];
        this.nrDeaths=data?.timeline.deaths[this.queryDate];
      }

    });
  }
  provinceSelected(province){
    console.log(province);
    this.getStats(province);
  }
  private resetCounts(){
    this.nrCases=0;
    this.nrRecovered=0;
    this.nrDeaths=0;
  }
}

interface CovidData{
  country: string;
  province: string;
  timeline: {
    cases: [],
    deaths: [],
    recovered: []
  }
}
