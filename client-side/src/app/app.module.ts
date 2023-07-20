import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { AssociationCreatorComponent } from './settings-bar/association-creator/association-creator.component';
import { GroupCreatorComponent } from './settings-bar/group-creator/group-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    GroupsComponent,
    SettingsBarComponent,
    AssociationCreatorComponent,
    GroupCreatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    SidebarModule,
    TableModule,
    MenubarModule,
    SplitButtonModule,
    OverlayPanelModule,
    DialogModule,
    MultiSelectModule,
  ],
  providers: [
    MessageService,
    GroupCreatorComponent,
    AssociationCreatorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
