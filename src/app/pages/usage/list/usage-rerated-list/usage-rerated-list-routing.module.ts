import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageReratedListComponent } from './usage-rerated-list.component';


const routes: Routes = [
    {
        path: '',
        component: UsageReratedListComponent,
        data: { title: 'Usages - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsageReratedListRoutingModule { }
