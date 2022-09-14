import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { LoginModel } from '../shared/models/loginModel';
import { TokenModel } from '../shared/models/tokenModel';
import { IUser } from '../shared/models/user';
import { ResponseModel } from '../shared/models/responseModel';
import { SingleResponseModel } from '../shared/models/singleResponseModel';
import { RegisterModel } from '../shared/models/registerModel';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/auth/';

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.baseUrl+"login",loginModel)
  }
  register(registerModel:RegisterModel){
    return this.httpClient.post(this.baseUrl+"register",registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
