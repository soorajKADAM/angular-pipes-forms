import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipesforms';
  name ='Value in Far';
  value : number=0;


  FarToCel = new FormGroup({
    username: new FormControl('name',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('example@gmail.com',[Validators.required, Validators.email])
  })

  getMail(){
    console.warn(this.FarToCel.value)
  }


  get username(){
    return this.FarToCel.get('username')
  }

  get email(){
    return this.FarToCel.get('email')
  }
}
