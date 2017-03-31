import {Routes} from '@angular/router';

import {CompComponent} from './component/component.component';

export const routes: Routes = [
    {path: 'main', component: CompComponent},
    {path: '**', component: CompComponent}
];