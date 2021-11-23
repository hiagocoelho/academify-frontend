import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'analytics', component: AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
