import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'rated',
                loadChildren: () => import('src/app/pages/usage/list/usage-rated-list/usage-rated-list.module').then(m => m.UsageRatedListModule),
            },
            {
                path: 'billed',
                loadChildren: () => import('src/app/pages/usage/list/usage-list/usage-list.module').then(m => m.UsageListModule),
            },
            {
                path: 'rerated',
                loadChildren: () => import('src/app/pages/usage/list/usage-rerated-list/usage-rerated-list.module').then(m => m.UsageReratedListModule),
            },
            {
                path: 'received',
                loadChildren: () => import('src/app/pages/usage/list/usage-received-list/usage-received-list.module').then(m => m.UsageReceivedListModule),
            }

            
        ],
        canActivateChild: [AuthGuard]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
