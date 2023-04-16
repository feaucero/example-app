import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ReferenceComponent } from './reference/reference.component';
import { ParentComponent } from './parent/parent.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { BuiltinAttributesComponent } from './builtin-attributes/builtin-attributes.component';
import { BuiltinStructuresComponent } from './builtin-structures/builtin-structures.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'event', component: EventComponent },
  { path: 'two-way', component: TwoWayComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'parent-output', component: ParentOutputComponent },
  { path: 'builtin-attributes', component: BuiltinAttributesComponent },
  { path: 'builtin-structures', component: BuiltinStructuresComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
