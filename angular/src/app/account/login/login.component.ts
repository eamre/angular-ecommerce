import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder,ReactiveFormsModule } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AccountService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(data=>{
        this.toastrService.info(data.message);
        localStorage.setItem("token",data.data.token)
        console.log(data);

      },responseError=>{
        //console.log(responseError);
        this.toastrService.error(responseError.error)
      })
    }
  }
}
