import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private appCode:String;
private appId:String;
public weather: any;

 constructor(private http: HttpClient) { }

  getUsers() {
    //return this.http.get('https://reqres.in/api/users')}

    //return this.http.get(' //https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/bratislava/?period=latestdata')}

    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal')}

  firstClick() {
    return console.log('clicked');
  }



 getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
  }

 
}
