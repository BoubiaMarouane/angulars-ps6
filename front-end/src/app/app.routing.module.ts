import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";
import {QuizComponent} from "./quizzes/quiz/quiz.component";
import {QuestionFormComponent} from "./questions/question-form/question-form.component";
import {LoginComponent} from "./login/login";
import {RegisterComponent} from "./registerpage/registerpage";
import {UserQuizListComponent} from "./homepage-user/userquiz-list/userquiz-list.component";
import {WelcomePageComponent} from "./welcomepage/welcomepage";


const routes: Routes = [
  {path: 'quizlist', component: QuizListComponent},
  {path: 'quizform', component: QuizFormComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'edit', component: EditQuizComponent},
  {path: '', redirectTo: '/welcomepage', pathMatch: 'full'},
  {path: 'edit/:id', component: QuestionFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userquiz', component: UserQuizListComponent},
  {path: 'welcomepage', component: WelcomePageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
