import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from './components/sample/sample.component';
import { SampleTwoComponent } from './components/sample-two/sample-two.component';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent,
    data: {
      title: 'Sample App #1'
    },
    children: [
      {
        path: 'shiba',
        component: SampleComponent,
        data: {
          title: 'Sample App #1 - Child #1'
        }
      }
    ]
  },
  {
    path: 'app2',
    component: SampleTwoComponent,
    data: {
      title: 'Sample App #2'
    },
    children: [
      {
        path: 'spinone',
        component: SampleTwoComponent,
        data: {
          title: 'Sample App #2 - Child #1'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes = routes;
}
