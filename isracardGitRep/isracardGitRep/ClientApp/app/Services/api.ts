import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    private baseUrl: string;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // get objects from the server controller
    public Get<T>(postFixUrl: string): Promise<T> {
        return this.http.get(this.baseUrl + postFixUrl).map(res => {
            return res.json() as T;
        }).toPromise();
    }

    // get objects from the external service
    public GetFromService<T>(serviceUrl: string): Promise<T> {
        return this.http.get(serviceUrl).map(res => {
            return res.json() as T;
        }).toPromise();
    }

    // set object to the server (insert to the session in the controller)
    public Set<T>(postFixUrl: string, rep: T): void {
        this.http.post(this.baseUrl + postFixUrl, rep).subscribe(result => {
        }, error => console.error(error));
    }


    public GetAll<T>(url1: string, url2: string) {
        Observable.forkJoin(
            this.Get<T>(url1), this.Get<T>(url2)).toPromise()
            .then(res => {
                var a = res;
            });
    }

}