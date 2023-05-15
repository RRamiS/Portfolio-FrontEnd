import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EditSkillComponent } from './experiencia/edit-skill.component';
import { NewSkillComponent } from './experiencia/new-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencias/new-experiencia.component';
@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    ContactoComponent,
    LoginComponent,
    EditSkillComponent,
    NewSkillComponent,
    EducacionComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    ExperienciasComponent,
    EditExperienciaComponent,
    NewExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
