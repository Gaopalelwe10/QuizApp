import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page0=true;
  constructor(private route: Router) {}
  calender(){
    // this.route.navigateByUrl("calender");
    this.route.navigate(['calender'], { queryParams: { page0:this.page0}});
  }
  science(){
    // this.route.navigateByUrl("science");
    this.route.navigate(['science'], { queryParams: { page0:this.page0}});
  }
  animal(){
    // this.route.navigateByUrl("animal");

    this.route.navigate(['animal'], { queryParams: { page0:this.page0}});
  }

  
}
