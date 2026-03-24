import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home'; 
import { StudentList } from './components/student-list/student-list';
import { StudentCreateComponent } from './components/student-create/student-create';
import { StudentUpdateComponent } from './components/student-update/student-update';

export const routes: Routes = [
  { path: '', component: HomeComponent },              
  { path: 'view-students', component: StudentList },    
  { path: 'create-student', component: StudentCreateComponent },
  { path: 'update-student/:id', component: StudentUpdateComponent }
];