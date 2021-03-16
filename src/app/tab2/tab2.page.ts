import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  random : number
  numberInput : number
  isDone : Boolean

  constructor() {
    this.random = this.getRandomInt(25)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  try(){
    this.isDone = (this.numberInput == this.random)
    if (!this.isDone){
      this.numberInput = null
      alert("jawaban salah")
    }
  }
}
