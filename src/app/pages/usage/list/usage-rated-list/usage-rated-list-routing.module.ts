import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageRatedListComponent } from './usage-rated-list.component';


const routes: Routes = [
    {
        path: '',
        component: UsageRatedListComponent,
        data: { title: 'Rated - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsageRatedListRoutingModule { }
