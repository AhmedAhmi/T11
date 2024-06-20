import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { ChildView2Component } from './child-view2/child-view2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'child-view1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'child-view1', component: ChildView1Component, data: { text: 'Child View1' } },
  { path: 'child-view2', component: ChildView2Component, data: { text: 'Child View2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
