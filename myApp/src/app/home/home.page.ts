import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import * as moment from 'moment';
import 'moment-timezone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
service:any;
    serviceHourRate:any;
    servicetime:[];
    shiftDay:[];
  constructor(private dataService: DataserviceService) {
      this.service = this.dataService.dservice;
      this.serviceHourRate = parseInt(this.service.wagePerHourInCents) /100; 
       let shiftT = [];
      let shiftTT = [];
      this.service.shifts.map((shifttime => {
          let s = moment(shifttime.startDate).add(1,'hours').format('ddd, MMM D hh:mm A z') + "PST";
          let v =  moment(shifttime.startDate).add(1,'hours').format('ddd, MMM D')
      shiftT.push(s);
        shiftTT.push(v);
      }))
     this.servicetime = shiftT; 
    this.shiftDay = shiftTT;
       
  }
    
  

    

}
