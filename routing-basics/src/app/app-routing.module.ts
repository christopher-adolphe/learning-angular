import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent, canActivateChild: [AuthGuardService], children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] },
  ] },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  // { path: 'not-found', component: NotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Oops, page not found!'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
