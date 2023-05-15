import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { EditSkillComponent } from './experiencia/edit-skill.component';
import { NewSkillComponent } from './experiencia/new-skill.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NewExperienciaComponent } from './experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

const routes: Routes = [
  {
  path: "", component: InicioComponent
  },
  {
    path: "inicio", component: InicioComponent
    },
  {
    path: "experiencia", component: ExperienciaComponent
  },
  {
    path: "proyectos", component: ProyectosComponent
  },
  {
    path: "contacto", component: ContactoComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "editskill", component: EditSkillComponent
  },
  {
    path: "newskill", component: NewSkillComponent
  },
  {
    path: 'nuevaedu', component: NeweducacionComponent
  },
  {
    path: 'editedu/:id', component: EditeducacionComponent
  },
  {
    path: 'educacion', component: EducacionComponent
  },
  {
    path: 'nuevaexp', component: NewExperienciaComponent
  },

  {
    path: 'editexp/:id', component: EditExperienciaComponent
  },
  {
    path: 'expe', component: ExperienciasComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
