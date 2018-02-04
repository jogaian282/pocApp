import { Injectable,Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,private httpClient:HttpClient) {     
    }

    

}