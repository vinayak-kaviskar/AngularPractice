import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sass-test',
  templateUrl: './sass-test.component.html',
  styleUrls: ['./sass-test.component.scss']
})
export class SassTestComponent implements OnInit {

  constructor(public http:Http,private http2:HttpClient,private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
   
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
pressedButton(){
  this.getData();
}

  getAlerts()
  {
    console.log("In get alerts");
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
     headers.append('api_key','OURKEY');
      headers.append('Cache-control', 'no-cache');
  headers.append('Cache-control', 'no-store');
  headers.append('Expires', '0');
  headers.append('Pragma', 'no-cache');
    //  const options = new RequestOptions({headers: headers});
       var optons = { headers:headers};
    console.log("Options is:");
    console.log(optons);
      const url = `http://localhost:9000/rsdp/api/check`;
      return new Promise(resolve =>{
        this.http2.get(url,{headers:{'api_key':'OURKEY'}}).subscribe(
              (response)=>{
                  //if(response.json().code == undefined)
                  //{
                    console.log("in success comppnent");
                    console.log(response[0]);
                      resolve(response);
                  //}
                //  else{
                    
                      //resolve([]);
                  //    console.error(response.json());
                  //}

                 
                  
              },
              (error)=>{
                console.log("in error comppnent");
                console.log(error);
                      resolve([]);
                      console.error(error);
              }
          );

      });
  }
  getData(){
    console.log("In get data");
  this.getAlerts().then(data2=>{
     
    
    console.log(data2);
  });
}
}
