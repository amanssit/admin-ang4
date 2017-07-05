import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
//for loder
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
//for ng-smart-table
import {Ng2SmartTableModule} from 'ng2-smart-table';
//for chart
import {ChartModule} from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import {Ng2TableModule} from 'ng2-table/ng2-table';
import {PaginationModule} from "ngx-bootstrap/pagination"; // from ng2-bootstrap
//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

//reference from https://material.angular.io/guide/getting-started
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {HeaderComponent} from './common/header/header.component';
import {ConfirmComponent} from './common/dialog/confirm/confirm.component';
import {MessageComponent} from './common/dialog/message/message.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
];
export function highchartsFactory() {
    return highcharts;
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AboutComponent,
        ProfileComponent,
        RegisterComponent,
        HeaderComponent,
        ConfirmComponent,
        MessageComponent,
        //        NgTableComponent,NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective        
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        
        SlimLoadingBarModule.forRoot(),
        
        Ng2SmartTableModule,
        
        ChartModule,
        
        Ng2TableModule,
        FormsModule,        //formModule also used fro pagination
        PaginationModule.forRoot(),
        
        BrowserAnimationsModule,
        MaterialModule,
        MdNativeDateModule,

    ],
    providers: [
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        }
    ],
    bootstrap: [AppComponent],
    exports: [BrowserModule, SlimLoadingBarModule],
    entryComponents: [ConfirmComponent, MessageComponent]
})
export class AppModule {}