import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageReceivedListComponent } from './usage-received-list.component';


const routes: Routes = [
    {
        path: '',
        component: UsageReceivedListComponent,
        data: { title: 'Usages - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsageReceivedListRoutingModule { }
