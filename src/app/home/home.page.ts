import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  page0=true;
  countC=0;
  countA=0;
  countS=0;
  total:number;
  calenderV:number=0;
  scienceV:number=0;
  animalV:number=0;
  constructor(private route: Router , private Aroute : ActivatedRoute , private alertCtrl :AlertController) {}
  ngOnInit() {
    this.Aroute.queryParams
    .subscribe(params => {
      this.countC = params.countC;
      this.countA = params.countA;
      this.countS = params.countS; 
    });
  }
  calender(){
    // this.route.navigateByUrl("calender");
    this.calenderV=1;
    this.route.navigate(['calender'], { queryParams: { page0:this.page0}});
  }
  science(){
    // this.route.navigateByUrl("science");
    this.scienceV=1;
    this.route.navigate(['science'], { queryParams: { page0:this.page0}});
  }
  animal(){
    // this.route.navigateByUrl("animal");
    this.animalV=1;
    this.route.navigate(['animal'], { queryParams: { page0:this.page0}});
  }

  show(){
  //   if(this.calenderV==1){
  //     this.Aroute.queryParams
  //     .subscribe(params => {
  //       this.countC = params.countC;
        
        
  //     });
  //   }
  //  if(this.scienceV==1){
  //   this.Aroute.queryParams
  //   .subscribe(params => {
  //     this.countS = params.countS; 
  //   });
  //  }
   
  //  if(this.animalV==1){
  //   this.Aroute.queryParams
  //   .subscribe(params => {
  //     this.countA = params.countA;
  //   });
  //  }
  
  //   this.total=this.countC + this.countA + this.countS;
//     const alert = this.alertCtrl.create({
//       message: ""+ this.total,
//       subHeader: 'Total',
//       buttons: ['Ok']}).then(
//       alert=> alert.present()
// );
  }
}
