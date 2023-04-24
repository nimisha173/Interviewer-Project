import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainformServiceService {

  constructor(private http:HttpClient) {​​​​​​​​ }​​​​​​​​

  public doRegistration(interviewer: any){​​​​​​​​
    return this.http.post("http://localhost:9091/interview/adddetail",interviewer,{​​​​​​​​responseType:'text' as 'json'}​​​​​​​​);
  }​​​​​​​​
  public getUsers(){​​​​​​​​
   return this.http.get("http://localhost:9091/interview/getdetails");
  }​​​​​​​​
   public getUserByEmail(email: string){​​​​​​​​
     return this.http.get("http://localhost:9090//findUser/"+email);
  }​​​​​​​​
   public deleteUser(id: string){​​​​​​​​
    return this.http.delete("http://localhost:9091/interview/{id}"+id);
   }​​​​​​​​
}​​​​​​​​


  


