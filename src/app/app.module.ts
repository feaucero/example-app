import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ReferenceComponent } from './reference/reference.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { ChildOutputComponent } from './parent-output/child-output/child-output.component';
import { BuiltinAttributesComponent } from './builtin-attributes/builtin-attributes.component';
import { BuiltinStructuresComponent } from './builtin-structures/builtin-structures.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component'
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    EventComponent,
    TwoWayComponent,
    ReferenceComponent,
    ParentComponent,
    ChildComponent,
    ParentOutputComponent,
    ChildOutputComponent,
    BuiltinAttributesComponent,
    BuiltinStructuresComponent,
    UserComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
