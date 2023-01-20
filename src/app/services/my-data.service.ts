import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class MyDataService{

    constructor(private http: HttpClient){}

    getData(){
        let myData = this.http.get<any>('https://reqres.in/api/users?page=1');
        return myData;
    }

    getDetails(id:any){
        let myDetails = this.http.get<any>('https://reqres.in/api/users/'+id);
        return myDetails;
    }

    handleError(err: HttpErrorResponse) {
        let message: string;
        if (err.error instanceof ErrorEvent)
            message = `ClientSide Error happend: ${err.error.message}`;
        else
            message = `Server Error: Status: ${err.status} ${err.message}`;
        console.log(message);

        return throwError(() => message);
    }
}