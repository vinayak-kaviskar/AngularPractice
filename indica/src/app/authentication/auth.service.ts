import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {


  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   private myLoggedFlag:boolean=true;
 private bingo:string = "NODATA";

  constructor(private router: Router,private http:HttpClient) { }
  


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
   myLoggedInFlag(){
     console.log("value in service of my flag:"+this.myLoggedFlag)
    return this.myLoggedFlag;
  }

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.myLoggedFlag= true;
      console.log("in login method of login service"+ this.myLoggedFlag)
      this.getLoginDetails(user.userName,user.password).then(data=>{
        this.bingo = user.userName;

        console.log("Data received is:");
        console.log(data);

      });
      this.router.navigate(['/modules']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    sessionStorage.setItem("loggedInFlag","false");

    


    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  getBingoData():string
  {
      return this.bingo;
  }



  getLoginDetails(userName1:String,password:String)
  {
     let  userName :String= userName1;
        const url = `http://localhost:9000/rsdp/api/myLogin/${userName}`;

        return new Promise(resolve=>{

            this.http.get(url).subscribe((succes)=>{
                console.log("Succes:"+succes);
                console.log("data from api");
                console.log(succes);
                let result :any = succes;
                sessionStorage.setItem("key",result.key);
                sessionStorage.setItem("components",result.rolesList);
                console.log(JSON.stringify(result.userPermissions)  );
                sessionStorage.setItem("userPermissions",JSON.stringify(result.userPermissions));
                sessionStorage.setItem('encryptedPermissions',result.encryptedPermissions);
                console.log(sessionStorage.getItem('userPermissions'));
                console.log(JSON.parse(sessionStorage.getItem('userPermissions')));
                sessionStorage.setItem("loggedInFlag","true");

                


                this.router.navigate(['/modules']);
                resolve(succes);
            },(error)=>{
                console.log("Error:"+error);
                sessionStorage.setItem("loggedInFlag","false");

              

                resolve(error);
            })

        });

  }
}
