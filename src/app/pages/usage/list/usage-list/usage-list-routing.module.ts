import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageListComponent } from './usage-list.component';


const routes: Routes = [
    {
        path: '',
        component: UsageListComponent,
        data: { title: 'Usages - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsageListRoutingModule { }
