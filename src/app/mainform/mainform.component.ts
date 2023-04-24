// import { Component } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: '````````````````````````````````````````````````app-mainform````````````````````````````````````````````````',
//   templateUrl: './mainform.component.html',
//   styleUrls: ['./mainform.component.css']
// })
// export class MainformComponent {
//   constructor(private route:Router){
   

//   }
//     public interviewer = {
//       interviewerId: '',
//       interviewerName: '',
//       interviewerEmail: '',
//       interviewerRole: '',
//       interviewerSkills: '',
//       interviewerExperience: null,
//       availableDate: '',
//       availableTime: ''
//     };
//     options = [
//       'HR',
//       'Manager',
//       'Developer',
//       'Designer'
//     ];

// interviewerEmail: any;
// form: any;
//   router: any;
  
// public scheduleInterview() {
//       console.log(this.interviewer);
//       // Add logic to save the interviewer data
//     }
//     formSubmitted = false;
 
    
// onSubmit() {
//   // perform form submission logic here
//   this.formSubmitted = true;
//   this.route.navigate(['update-form']);
  
//   // window.alert("Form has been submitted successfully!");
  

// }
// }



import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Interviewer } from '../Interviewer';
import { Time } from "@angular/common";
import { MainformServiceService } from '../mainform-service.service';
import { Interviewer } from '../Interviewer';

@Component({
  selector: '````````````````````````````````````````````````app-mainform````````````````````````````````````````````````',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent  implements OnInit{
  // constructor(private route:Router){}
  formSubmitted = false;

  options = [
          'HR',
        'Manager',
          'Developer',
          'Designer'
       ];
 
    // public interviewer = {
    //   interviewerId: '',
    //   interviewerName: '',
    //   interviewerEmail: '',
    //   interviewerRole: '',
    //   interviewerSkills: '',
    //   interviewerExperience: null,
    //   availableDate: '',
    //   availableTime: ''
    // };

    interviewer:Interviewer = new Interviewer("","","","","",0,"","");
    
    message: any;
    
    constructor(private service: MainformServiceService,private route:Router ) {}
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   
  
// public scheduleInterview() {
//       console.log(this.interviewer);
//       // Add logic to save the interviewer data
//     }
//     formSubmitted = false;
 
    
onSubmit() {
  console.log(this.interviewer);

    let resp = this.service.doRegistration(this.interviewer);
    resp.subscribe(data=>this.message=data);
    // alert("form submitted")
     this.formSubmitted = true;
     this.route.navigate(['update-form']);
  

}
}