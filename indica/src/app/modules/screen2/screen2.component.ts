import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../authentication/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {

  constructor(private http2:HttpClient,private checkService:AuthService) { }

  ngOnInit() {
  }


  testService()
  {
    console.log("Data from service is: "+this.checkService.getBingoData());
  }

  pressedButton(){
    this.getData();
  }
  
    getAlerts()
    {
      console.log("In get alerts");
        const headers = new HttpHeaders();
        
      //  const options = new RequestOptions({headers: headers});
         var optons = { headers:headers};
      console.log("Options is:");
      console.log(optons);
        const url = `http://localhost:9000/rsdp/api/check`;
        return new Promise(resolve =>{
          this.http2.get(url,{headers:{'api2_key':'O2URKEY'}}).subscribe(
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





  encryptPayload(plainPayload:string){
    console.log(plainPayload)
    /*
     * Encrypt payload
     * @param {string}  plainPassword - user details to store
     * @return {}
     */

    // msgString is expected to be Utf8 encoded
    //let key = CryptoJS.enc.Utf8.parse("0123456789abcdef");
    //let key = CryptoJS.enc.Hex.parse('0123456789abcdef');
    //var iv = CryptoJS.lib.WordArray.random(16);
      //var iv = CryptoJS.enc.Utf8.parse('fedcba9876543210');
    //var iv =  CryptoJS.enc.Hex.parse('fedcba9876543210');
    var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
    var iv  = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a090807060504030201000');

    var encrypted = CryptoJS.AES.encrypt(plainPayload, key, {
      iv: iv,padding: CryptoJS.pad.Pkcs7,mode: CryptoJS.mode.CBC
    });
    
    /* console.log(iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64));*/
    var encryptedText = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64); 
    console.log("Encrypted string is");
    console.log(encrypted);
    this.decryptPayload(encryptedText);
    //this.decryptPayload(sessionStorage.getItem('encryptedPermissions'));
    //return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
  }


  decryptPayload(ciphertextStr) {
    console.log("input for decrypt method");
    console.log(ciphertextStr);
    var check = ciphertextStr;
    console.log(check);
    
    

    /*
     * Decrypt payload
     * @param {string}  ciphertextStr - Encrypted Payload
     * @return {}
     */

    //let key = CryptoJS.enc.Utf8.parse("0123456789abcdef");
    var ciphertext = CryptoJS.enc.Base64.parse(ciphertextStr);
    

    // split IV and ciphertext
    var iv = ciphertext.clone();
    //var iv = CryptoJS.enc.Utf8.parse('fedcba9876543210');
    var iv  = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a090807060504030201000');

    var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
    //var iv  = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a090807060504030201000');
    console.log(ciphertext);
    iv.sigBytes = 16;
    iv.clamp();
    ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
    ciphertext.sigBytes -= 16;
    console.log(ciphertext);

    // decryption
    var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
      iv: iv
    });

    console.log("Decrypted string is");
    console.log(decrypted);
    //console.log(decrypted.toString(CryptoJS.enc.Utf8));
    console.log(decrypted.toString(CryptoJS.enc.Base64));

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encryptMethod2()
  {
    //var key = CryptoJS.enc.Hex.parse('0123456789abcdef');
    var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
    var iv  = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a090807060504030201000');
    var message = "HELLOMOTO";
    var padMsg = this.padString(message);

    var encrypted = CryptoJS.AES.encrypt(padMsg, key, { iv: iv, padding: CryptoJS.pad.NoPadding, mode: CryptoJS.mode.CBC});

    console.log("Encrypted: "+encrypted);
    console.log("Encrypted text: "+encrypted.ciphertext);

    var encryptedText = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64); 
    console.log("Encrypted string is");
    console.log(encrypted);
    this.decryptPayload(encryptedText);

    let inputToDecryptMethod = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);

    //this.decryptPayload(inputToDecryptMethod);
  }

   padString(source) {
            var paddingChar = ' ';
            var size = 16;
            var x = source.length % size;
            var padLength = size - x;

            for (var i = 0; i < padLength; i++) source += paddingChar;

            return source;
        }


        test()
        {
          var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
          console.info("encrypted " + encrypted);
          var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
          var plainText = decrypted.toString(CryptoJS.enc.Utf8)
          console.info("decrypted " + plainText);
        }


}
