import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Register } from '../model/register';

@Injectable()
export class AuthService {

    constructor(private httpClient:HttpClient,@Inject(APP_CONFIG)  private config:IAppConfig) { 

    }

    /**
     * @description : POST method to register user
     */
    registerUser(register:Register) {
        const url = this.config.apiEndpoint + "register" ;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        return this.httpClient.post(url,register,httpOptions)
    }

    /**
     * @description : Get Users
     */
    getUsers() {
        const url = this.config.apiEndpoint + "register" ;
        return this.httpClient.get(url);
    }

}