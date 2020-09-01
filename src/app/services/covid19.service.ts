import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  covidUrl = 'https://disease.sh/v3/covid-19/historical/CANADA/';


  constructor(private http: HttpClient) { }

  getCovidCasesByProvice(province: string) {
    return this.http.get(this.covidUrl + province + '?lastdays=1');
  }


}
