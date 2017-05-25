import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  nbMots : number = 5;

  mots;
  indexes;

  splittedMots = [];
  generatedWordJoinsList = [];

  generateList(){
     console.log("Liste de mots");
     console.log(this.mots)
     for(let indexMot in this.mots){
       this.splittedMots[indexMot] = this.mots[indexMot].split(";");
     }
     console.log("List splittée");
      console.log(this.splittedMots);

      this.generatedWordJoinsList = [];
      this.generateWordJoins(this.splittedMots,this.generatedWordJoinsList);
  }

  generateWordJoins(splittedMots,listToFill){
    if(splittedMots.length>0){
        //let splittedMotsTemp = splittedMots;
        //let listToProcess = splittedMotsTemp.splice(0,1);
        //let listToProcess = splittedMots.splice(0,1);
        //console.log("new list");
        //console.log(splittedMotsTemp);
        for(let i in splittedMots){
          let listToProcess = splittedMots[i];
          console.log("partial list to process");
          console.log(listToProcess);
          if(listToFill.length == 0){
            listToProcess.map((e)=>listToFill.push("+"+e));
          }else{
            //For each element already present
            listToFill.map((e,index)=>{
              listToProcess.map((j)=>{
                if(j != ""){
                  console.log("Adding " + j +" to "+e+"TODO : remove"+e);
                  listToFill.push(e+" +"+j);
                  //listToFill.splice(index);
                }
              });
              listToFill.splice(listToFill.indexOf(e),1);
            });
          }
        }
        console.log("RESULTS");
        console.log(listToFill);
        //this.generateWordJoins(splittedMotsTemp,listToFill)

    }
  }

  ngOnInit(){
    this.mots = [];
    for(let i=0; i<this.nbMots; i++){
      this.mots.push('');
    }
    this.indexes = Object.keys(this.mots);
  }
}
