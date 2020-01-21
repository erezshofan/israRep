import { Component } from '@angular/core';
import { IData } from '../../Entities/IData';
import { IRepository } from '../../Entities/IRepository';
import { ApiService } from '../../Services/api';

@Component({
    selector: 'myreps',
    templateUrl: './myreps.component.html'
})
export class MyrepsComponent {
    
    private GetMyRepositories = 'api/GitRep/GetMyRepositories';
    public repositories: IRepository[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        // get my repositories
        this.getMyRepositories();
    }

        // get my repositories (by session) from the api (api.ts)
    private getMyRepositories(): void {
        this.apiService.Get<IRepository[]>(this.GetMyRepositories).then(res => {
            this.repositories = res;
        });
    }


}
