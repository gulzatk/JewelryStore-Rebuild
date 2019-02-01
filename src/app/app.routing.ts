import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemListComponent } from './item-list/item-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },

    {
        path: 'items',
        component: ItemListComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);