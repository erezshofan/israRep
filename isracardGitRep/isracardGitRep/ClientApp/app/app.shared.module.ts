import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { SearchmainComponent } from './components/searchmain/searchmain.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { MyrepsComponent } from './components/myreps/myreps.component';

import { ApiService } from './Services/api';

@NgModule({
    declarations: [
        AppComponent,
        SearchmainComponent,
        SearchresultsComponent,
        MyrepsComponent
    ],
    providers: [
        ApiService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: SearchmainComponent },
            { path: 'myreps', component: MyrepsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
