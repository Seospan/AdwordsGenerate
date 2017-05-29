import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  nbMots : number = 2;

  mots;
  indexes;

  splittedMots = [];
  generatedWordJoinsList = [];

  addField(){
    this.nbMots++;
    this.generateFormList();
  }

  removeField(){
    this.nbMots--;
    this.generateFormList();
  }

  generateList(){
     console.log("Liste de mots");
     console.log(this.mots)
     for(let indexMot in this.mots){
       this.splittedMots[indexMot] = this.mots[indexMot].split(";");
     }
     console.log("List splittée");
      console.log(this.splittedMots);

      this.generatedWordJoinsList = this.generateWordJoins(this.splittedMots);
      console.log("Result");
      console.log(this.generatedWordJoinsList)
  }

  generateWordJoins(splittedMots){
    let listToFill = [];
    if(splittedMots.length>0){
        for(let listToProcess of splittedMots){
          if(listToProcess[0] != ""){
            console.log("partial list to process");
            console.log(listToProcess);
            if(listToFill.length == 0){
              listToProcess.map((e)=>listToFill.push("+"+e));
              console.log("Premier passage")
              console.log(listToFill)
            }else{
              let tempoList = [];
              listToFill.map(e => {
                console.log(e+" From listToFill")
                listToProcess.map(j=>{
                  tempoList.push(e+" +"+j);
                });
              });
              console.log("Tempo list");
              console.log(tempoList)
              listToFill = tempoList;
            }
          }
        }
    }
    return listToFill;
  }

  generateFormList(){
    //Stock old words to avoid losing them
    let tempoMots = this.mots;

    this.mots = [];
    for(let i=0; i<this.nbMots; i++){
      this.mots.push('');
    }
    //Reinject old words if there's some
    if(tempoMots){
      tempoMots.map((e,index)=>{
          if(index<this.nbMots){
            this.mots[index]=e;
          }
        });
    }

    this.indexes = Object.keys(this.mots);
  }

  ngOnInit(){
      this.generateFormList();
  }
}
