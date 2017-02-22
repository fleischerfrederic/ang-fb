import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ConnectedComponent } from './components/connected/connected.component';

const appRoutes:Routes=[

    {

        path:'login',
        component: LoginComponent
    },

    {
        path:'connected',
        component:ConnectedComponent},

        {path:'',
         redirectTo: 'login',
         pathMatch:'full'
        }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);