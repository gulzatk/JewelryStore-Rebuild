import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },

    {
        path: 'items',
        component: ItemListComponent
    },
    {
        path: 'items/:id',
        component: ItemDetailsComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);