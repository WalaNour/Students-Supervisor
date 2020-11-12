import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
import { StudentLoginComponent } from "./student-login/student-login.component";
import { LoginCompaniesComponent } from "./login-companies/login-companies.component";
import { RegisterCompaniesComponent } from "./register-companies/register-companies.component";
import { TcsignupComponent } from "./tcsignup/tcsignup.component";
import { LoginTcComponent } from "./login-tc/login-tc.component";
import { StudentProfilComponent } from "./student-profil/student-profil.component";
import { ProfileCompanyComponent } from "./profile-company/profile-company.component";
import { ProfilTcComponent } from "./profil-tc/profil-tc.component";
import { EditStudentProfileComponent } from "./edit-student-profile/edit-student-profile.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { FeedComponent } from "./feed/feed.component";
import { PostCenterComponent } from "./post-center/post-center.component";
import { PostComponent } from "./post/post.component";
import { AdminPostsComponent } from "./admin-posts/admin-posts.component";
import { TrainingCenterEditComponent } from "./training-center-edit/training-center-edit.component";
import { PostComapnyComponent } from "./post-comapny/post-comapny.component";
import { TcPostsComponent } from "./tc-posts/tc-posts.component";
import { ModifyPostTcComponent } from "./modify-post-tc/modify-post-tc.component";
import { PostsCompanyProfileComponent } from "./posts-company-profile/posts-company-profile.component";
import { UpdateCompanyPostsComponent } from "./update-company-posts/update-company-posts.component";
import { BanUsersComponent } from "./ban-users/ban-users.component";
import { StudentFeedComponent } from "./student-feed/student-feed.component";
import { NotificationComponent } from "./notification/notification.component";
import { AdminWeeklyUpdateComponent } from "./admin-weekly-update/admin-weekly-update.component";
import { LoginAdminComponent } from "./login-admin/login-admin.component";
import { ReportsToAdminComponent } from "./reports-to-admin/reports-to-admin.component";
import { AdminReportComponent } from "./admin-report/admin-report.component";
import { ReportComponent } from "./report/report.component";
import { AdminReportsComponent } from "./admin-reports/admin-reports.component";
import { AdminTreesComponent } from "./admin-trees/admin-trees.component";
import { StudentsTreesComponent } from "./students-trees/students-trees.component";
import { AdminAddCoachComponent } from "./admin-add-coach/admin-add-coach.component";
import { CoachListComponent } from "./coach-list/coach-list.component";
import { AuthGuard } from "./auth.guard";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ChoiceComponent } from "./choice/choice.component";
import { ResumeComponent } from "./resume/resume.component";
import { AddDataComponent } from "./add-data/add-data.component";
const routes: Routes = [
  { path: "register/student", component: VerficationComponent },
  {
    path: "verification/request/student",
    component: SendRequestforVerificationComponent,
  },
  {
    path: "admin",
    component: AdminVerificationComponent,
    canActivate: [AuthGuard],
  },
  { path: "wait", component: WaitingComponent, canActivate: [AuthGuard] },
  { path: "", component: LandingComponent },
  {
    path: "register/company",
    component: CompanyRegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "register/center",
    component: TrainingCenterRegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "verification/request/company",
    component: SendRequestCompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "verification/request/center",
    component: SendRequestCenterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signup/student",
    component: StudentRegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signin/student",
    component: StudentLoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signin/company",
    component: LoginCompaniesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signup/company",
    component: RegisterCompaniesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signin/center",
    component: LoginTcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "signup/center",
    component: TcsignupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "studentProfile",
    component: StudentProfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "company/profile",
    component: ProfileCompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "center/profile",
    component: ProfilTcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "editStudent",
    component: EditStudentProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "resultSearch",
    component: SearchResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "editCompany",
    component: CompanyEditComponent,
    canActivate: [AuthGuard],
  },
  { path: "feed", component: FeedComponent, canActivate: [AuthGuard] },
  {
    path: "post/center",
    component: PostCenterComponent,
    canActivate: [AuthGuard],
  },
  { path: "post", component: PostComponent },
  {
    path: "admin/delete",
    component: AdminPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "editTc",
    component: TrainingCenterEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "post/company",
    component: PostComapnyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "post/center",
    component: PostCenterComponent,
    canActivate: [AuthGuard],
  },
  { path: "own/posts", component: TcPostsComponent, canActivate: [AuthGuard] },
  {
    path: "modify/tc/posts",
    component: ModifyPostTcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "companyOwnPost",
    component: PostsCompanyProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "updateCompPost",
    component: UpdateCompanyPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "post/center",
    component: PostCenterComponent,
    canActivate: [AuthGuard],
  },
  { path: "own/posts", component: TcPostsComponent, canActivate: [AuthGuard] },
  { path: "admin/ban", component: BanUsersComponent, canActivate: [AuthGuard] },
  {
    path: "feed/student",
    component: StudentFeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "notification",
    component: NotificationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/update",
    component: AdminWeeklyUpdateComponent,
    canActivate: [AuthGuard],
  },
  { path: "admin/login", component: LoginAdminComponent },
  {
    path: "sendReport",
    component: ReportsToAdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "AdminReport",
    component: AdminReportComponent,
    canActivate: [AuthGuard],
  },
  { path: "report/post", component: ReportComponent, canActivate: [AuthGuard] },
  {
    path: "report/admin",
    component: AdminReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "tree/admin",
    component: AdminTreesComponent,
    canActivate: [AuthGuard],
  },
  { path: "tree", component: StudentsTreesComponent, canActivate: [AuthGuard] },
  {
    path: "admin/addCoach",
    component: AdminAddCoachComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "users/coachList",
    component: CoachListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "users/choice",
    component: ChoiceComponent,
    canActivate: [AuthGuard],
  },
  { path: "aboutUs", component: AboutUsComponent },
  { path: "resume", component: ResumeComponent },
  { path: "addData", component: AddDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
