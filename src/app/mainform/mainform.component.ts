import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: '````````````````````````````````````````````````app-mainform````````````````````````````````````````````````',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent {
  constructor(private route:Router){

  }
    public interviewer = {
      interviewerId: '',
      interviewerName: '',
      interviewerEmail: '',
      interviewerRole: '',
      interviewerSkills: '',
      interviewerExperience: null,
      availableDate: '',
      availableTime: ''
    };

interviewerEmail: any;
form: any;
  router: any;
  
public scheduleInterview() {
      console.log(this.interviewer);
      // Add logic to save the interviewer data
    }
    formSubmitted = false;
 
    
onSubmit() {
  // perform form submission logic here
  this.formSubmitted = true;
  window.alert("Form has been submitted successfully!");
  

}
move(){
  this.formSubmitted = true;
  this.route.navigate(['update-form']);
  
}

}
