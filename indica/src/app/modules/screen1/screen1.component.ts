import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

  user = {
    name: 'Arthur',
    age: 42
  };


  encryptdata()
  {
    var tobeencrypted:string = "HELLOMOTO";
    var commonAesKey:string = "1234567891234567";
    var myIv:string = "1234567891234567";
    let key = CryptoJS.enc.Utf8.parse(commonAesKey);
    var iv = CryptoJS.enc.Utf8.parse(myIv);
    var encrypted = CryptoJS.AES.encrypt(tobeencrypted, key, {
      iv: iv
    });

    console.log("Enctypted base64 string is:");
    console.log(iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64));
    //return ;
  }

  decryptdata(tobedecrypted)
  {

  }

}
