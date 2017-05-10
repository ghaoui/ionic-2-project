import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class Deals{

    private url = 'http://dealtounsi.com/wp-admin/admin-ajax.php';
    //private option = {'action' : 'getDeals'};
    private body : URLSearchParams = new URLSearchParams();
    constructor(private http: Http){}
    

    getDeals(){
        this.body.append('action' , 'getDeals' );
        let requestOptions = new RequestOptions();
        requestOptions.search = this.body;
        //return this.http.get(this.url, requestOptions).map(res => console.log(res));
        return this.http.get(this.url, requestOptions).map((response : Response) => response.json());
    }
}