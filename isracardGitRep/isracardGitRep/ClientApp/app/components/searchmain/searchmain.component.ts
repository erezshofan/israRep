import { Component } from '@angular/core';
import { IData } from '../../Entities/IData';
import { IRepository } from '../../Entities/IRepository';
import { ApiService } from '../../Services/api';

@Component({
    selector: 'searchmain',
    templateUrl: './searchmain.component.html',
    styleUrls: ['./searchmain.component.css']
})
export class SearchmainComponent {
    
    private serviceUrl = "https://api.github.com/search/repositories?q=";

    public searchkeyword: string;
    public repositories: IRepository[];
    /*public data: IData;*/
    
    
    constructor(private apiService: ApiService) {
    }


    ngOnInit() {
        //
    }

    // search button event
    public getRepResults(): void {
        if (this.searchkeyword != undefined)
            this.getRepResultsFromService();
    }

    // search keypressed event
    public seachkeyPressed(keyNum: number): void {
        if (keyNum == 13)
            this.getRepResults();
    }

    // get the results from the api (api.ts)
    private getRepResultsFromService(): void {
        this.apiService.GetFromService<IData>(this.serviceUrl + this.searchkeyword).then(res => {
            this.repositories = res.items;
        });
    }
}
