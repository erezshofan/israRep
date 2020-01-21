import { Component,Input } from '@angular/core';
import { IRepository } from '../../Entities/IRepository';
import { ApiService } from '../../Services/api';

@Component({
    selector: 'searchresults',
    templateUrl: './searchresults.component.html',
    styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent {
    
    private serviceUrl = "/api/GitRep";
    @Input() public repositories: IRepository[]; // get input of the repositories (all repositories or by session)
    @Input() public isbookmark: boolean = false; // check if the component is in "session result" page. (for design needs)

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
       //
    }

    // Insert bookmark to session after click on the button, send the repository object to the api (api.ts)
    public addBookmark(rep: IRepository): void {
        this.apiService.Set<IRepository>(this.serviceUrl, rep);
    }

    

}
