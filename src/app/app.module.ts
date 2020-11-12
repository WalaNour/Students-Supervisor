import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterStudentComponent } from "./register-student/register-student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AuthService } from "./auth.service";

import { VerficationComponent } from "./verfication/verfication.component";
import { SendRequestforVerificationComponent } from "./send-requestfor-verification/send-requestfor-verification.component";
import { AdminVerificationComponent } from "./admin-verification/admin-verification.component";
import { WaitingComponent } from "./waiting/waiting.component";
import { LandingComponent } from "./landing/landing.component";
import { CompanyRegisterComponent } from "./company-register/company-register.component";
import { TrainingCenterRegisterComponent } from "./training-center-register/training-center-register.component";
import { SendRequestCompanyComponent } from "./send-request-company/send-request-company.component";
import { SendRequestCenterComponent } from "./send-request-center/send-request-center.component";
import { StudentRegisterComponent } from "./student-register/student-register.component";
import { RegisterCompaniesComponent } from "./register-companies/register-companies.component";
import { TcsignupComponent } from "./tcsignup/tcsignup.component";
import { LoginTcComponent } from "./login-tc/login-tc.component";
import { LoginCompaniesComponent } from "./login-companies/login-companies.component";
import { StudentLoginComponent } from "./student-login/student-login.component";
import { StudentProfilComponent } from "./student-profil/student-profil.component";
import { ProfileCompanyComponent } from "./profile-company/profile-company.component";
import { ProfilTcComponent } from "./profil-tc/profil-tc.component";
import { EditStudentProfileComponent } from "./edit-student-profile/edit-student-profile.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { PostComapnyComponent } from "./post-comapny/post-comapny.component";
import { PostCenterComponent } from "./post-center/post-center.component";
import { FeedComponent } from "./feed/feed.component";
import { PostComponent } from "./post/post.component";
import { AdminPostsComponent } from "./admin-posts/admin-posts.component";
import { TrainingCenterEditComponent } from "./training-center-edit/training-center-edit.component";
import { ModifyPostTcComponent } from "./modify-post-tc/modify-post-tc.component";
import { PostsCompanyProfileComponent } from "./posts-company-profile/posts-company-profile.component";
import { UpdateCompanyPostsComponent } from "./update-company-posts/update-company-posts.component";
import { TcPostsComponent } from "./tc-posts/tc-posts.component";
import { BanUsersComponent } from "./ban-users/ban-users.component";
import { StudentFeedComponent } from "./student-feed/student-feed.component";
import { NotificationComponent } from "./notification/notification.component";

import { AdminWeeklyUpdateComponent } from "./admin-weekly-update/admin-weekly-update.component";
import { LoginAdminComponent } from "./login-admin/login-admin.component";
import { ReportsToAdminComponent } from "./reports-to-admin/reports-to-admin.component";
import { AdminReportComponent } from "./admin-report/admin-report.component";
import { AdminReportsComponent } from "./admin-reports/admin-reports.component";
import { ReportComponent } from "./report/report.component";
import { AdminTreesComponent } from "./admin-trees/admin-trees.component";
import { StudentsTreesComponent } from "./students-trees/students-trees.component";
import { AdminAddCoachComponent } from "./admin-add-coach/admin-add-coach.component";
import { CoachListComponent } from "./coach-list/coach-list.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ChoiceComponent } from "./choice/choice.component";
import { AddDataComponent } from './add-data/add-data.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    VerficationComponent,
    SendRequestforVerificationComponent,
    AdminVerificationComponent,
    WaitingComponent,
    LandingComponent,
    CompanyRegisterComponent,
    TrainingCenterRegisterComponent,
    SendRequestCompanyComponent,
    SendRequestCenterComponent,
    StudentRegisterComponent,
    RegisterCompaniesComponent,
    TcsignupComponent,
    LoginTcComponent,
    LoginCompaniesComponent,
    StudentLoginComponent,
    StudentProfilComponent,
    ProfileCompanyComponent,
    ProfilTcComponent,
    EditStudentProfileComponent,
    CompanyEditComponent,
    PostComapnyComponent,
    PostCenterComponent,
    FeedComponent,
    PostComponent,
    AdminPostsComponent,
    TrainingCenterEditComponent,
    TcPostsComponent,
    ModifyPostTcComponent,
    PostsCompanyProfileComponent,
    UpdateCompanyPostsComponent,
    BanUsersComponent,
    StudentFeedComponent,
    NotificationComponent,
    AdminWeeklyUpdateComponent,
    LoginAdminComponent,
    ReportsToAdminComponent,
    AdminReportComponent,
    AdminReportsComponent,
    ReportComponent,
    AdminTreesComponent,
    StudentsTreesComponent,
    AdminAddCoachComponent,
    CoachListComponent,
    AboutUsComponent,
    ChoiceComponent,
    AddDataComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
