export class Interviewer {
    interviewerId: string;
    interviewerName: string;
    interviewerEmail: string;
    interviewerRole: string;
    interviewerSkills: string;
    interviewerExperience: number;
    availableDate: string;
    availableTime: string;
  
    constructor(
      interviewerId: string,
      interviewerName: string,
      interviewerEmail: string,
      interviewerRole: string,
      interviewerSkills: string,
      interviewerExperience: number,
      availableDate: string,
      availableTime: string
    ) {
      this.interviewerId = interviewerId;
      this.interviewerName = interviewerName;
      this.interviewerEmail = interviewerEmail;
      this.interviewerRole = interviewerRole;
      this.interviewerSkills = interviewerSkills;
      this.interviewerExperience = interviewerExperience;
      this.availableDate = availableDate;
      this.availableTime = availableTime;
    }
  }


