import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'sidenav',
    component: SideNavComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component:  SkillsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
