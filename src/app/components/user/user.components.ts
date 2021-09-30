import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <h1>My First Angular Component</h1>
    <p>My counter value: {{count}}</p>
    
    <input type="text" #name class="form-control"  (change)="onSearchChange($event)">
    
    <p>{{playerName}}</p>
    <button (click)="increseCounter()">Increase Counter</button>
    <button (click)="decrementCounter()">Decrement Counter</button>
  `
})




export class usersComponent {
    userPayload = {
        name:"",
        email:""
    }
    count = 0 
    playerName = "Virat kholi"
    constructor(){}
  
    increseCounter = () => {
      this.count += 1
    }

    decrementCounter = () => {
        if(this.count > 0 ){
            this.count -= 1
        }
    }

    onSearchChange(e:any) { 
        console.log(e.target.id, 'id') 
        console.log("inside this method");
        this.playerName = e.target.value
      }
    

   

}