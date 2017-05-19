import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  _mot1 : string;
 set mot1(val){
      this.mot1 = val
     // this.mots["mot1"] = val.split(";");
      //console.log(this.mots)
  }
  get mot1(){
      return this.mot1
  }

  mot2 : string;
  mot3 : string;
  mot4 : string;
  mot5 : string;
  mot6 : string;

  mots;

  total:string;

  generateList(val, mot){
     // console.log(this.mot1)
      //this.mots[mot] = val.split(";");
      //console.log(this.mots);
  }
}
