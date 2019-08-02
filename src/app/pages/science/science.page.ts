import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {
  Answer: number;
  Answer2:number;
  outcome:number;

  count=0;
    Q1;
    Q2;
    Q3;
    Q4;
    Q5;



  page0=true;
  Page1=false;
  Page2:boolean;
  Page3:boolean;
  Page4:boolean;
  Page5:boolean;
  Page6:boolean;
  backbutton=true;

  timerVar;
  // used to display timer in the html page
  timeValue;
  Q1time=1;
  Q2time=1;
  Q3time=1;
  Q4time=1;
  Q5time=1;
  totaltime=0;

  min:string;
  sec:string;

  constructor(public navCtrl: NavController , public alertCtrl: AlertController,private route: Router, private Aroute: ActivatedRoute) { 
    this.Answer=0;
    this.outcome=0;
    this.Answer2=0;
  }

  ngOnInit() {
    this.Aroute.queryParams
    .subscribe(params => {
      this.page0 = params.page0;
    
    });
  }
  startButton(){
    this.timeValue=30;
    this.timerVar = interval (500).subscribe( x =>{
      // console.log(x);
      this.timeValue = 30-x;
      this.Q1time=x;
      if(this.timeValue==0){
        this.timerVar.unsubscribe()
        this.Next1();
        }
    })
    this.page0=false;
    this.backbutton=false;
    this.Page1=true;
  
  }
  Next1(){
    this.timeValue=30;
    this.timerVar.unsubscribe()
    this.Page1=false;
    this.timerVar = interval (500).subscribe( x =>{
      // console.log(x);
      this.timeValue = 30-x;
      this.Q2time=x;
      if(this.timeValue==0){
        this.timerVar.unsubscribe()
        this.Next2();
        }
    })
    this.Page2=true;
  
   }
   Next2(){
    this.timeValue=30;
    this.timerVar.unsubscribe()
    this.Page2=false;
    this.timerVar = interval (500).subscribe( x =>{
      // console.log(x);
      this.timeValue = 30-x;
      this.Q3time=x;
      if(this.timeValue==0){
        this.timerVar.unsubscribe()
        this.Next3();
        }
    })
    this.Page3=true;
   
  }
  Next3(){
    this.timeValue=30;
    this.timerVar.unsubscribe()
     this.Page3=false;
     this.Page4=true;
     this.timerVar = interval (500).subscribe( x =>{
      // console.log(x);
      this.timeValue = 30-x;
      this.Q4time=x;
      if(this.timeValue==0){
        this.timerVar.unsubscribe()
        this.Next4();
        }
    })
   }
   
   Next4(){
    this.timeValue=30;
    this.timerVar.unsubscribe()
     this.Page4=false;
     this.Page5=true;
     this.timerVar = interval (500).subscribe( x =>{
      // console.log(x);
      this.timeValue = 30-x;
      this.Q5time=x;
      if(this.timeValue==0){
        this.timerVar.unsubscribe()
        this.Next5();
        }
    })
   }
  
   Next5(){
    // this.timeValue=30;
    this.timerVar.unsubscribe()
    this.Page5=false;
    this.Page6=true;
    this.AnswerButt();
    // this.timerVar = interval (500).subscribe( x =>{
    //   // console.log(x);
    //   this.timeValue = 30-x;
    //   this.Q5time=x;
    //   if(this.timeValue==0){
    //     this.timerVar.unsubscribe()
    //     this.AnswerButt();
    //     }
    // })
    this.totaltime= this.Q1time + this.Q2time + this.Q3time + this.Q4time + this.Q5time;
    this.timerVar.unsubscribe()
    var date = new Date(null);
    date.setSeconds(this.totaltime); // specify value for SECONDS here
    this.min = date.toISOString().substr(15, 1);
    this.sec = date.toISOString().substr(17, 2);
  }

   AnswerButt(){
    if(this.Q1 == "Semicircular canals"){
      this.count +=1;
    }
    if(this.Q2 == "chloroplast"){
      this.count +=1;
    }
    if(this.Q3 == "atom"){
      this.count +=1;
    }
    if(this.Q4 == "eardrum"){
      this.count += 1;
    }
    if(this.Q5 == "compound"){
      this.count +=1;
    }
    if(this.count>=3){
      // alert("You passed your Test");
      const alert = this.alertCtrl.create({
              message: 'You passed your Test',
              subHeader: 'Hooray!!',
              buttons: ['Ok']}).then(
              alert=> alert.present()
        );
    }else{
      // alert("Sorry you failed the Test");
      const alert = this.alertCtrl.create({
        message: 'You failed the Test',
        subHeader: 'Better Luck next time',
        buttons: ['Ok']}).then(
        alert=> alert.present()
      );
    }
    // console.log(this.count)
  }

  rePlay(){
    this.Q1=0;
    this.Q2=0;
    this.Q3=0;
    this.Q4=0;
    this.Q5=0;
    this.count=0;
    this.Page6=false;
    
    this.route.navigateByUrl("home")
  }
  //  startTimer(){
  //   this.timerVar = interval (500).subscribe( x =>{
  //     // console.log(x);
  //     this.timeValue = 60-x;

  //     if(this.timeValue==0){
  //       this.timerVar.unsubscribe()
  //       const alert = this.alertCtrl.create({
  //         message: 'Low battery',
  //         subHeader: '10% of battery remaining',
  //         buttons: ['Dismiss']}).then(
  //           alert=> alert.present()
  //         );
  //       }
  //   })

  //  }
}
