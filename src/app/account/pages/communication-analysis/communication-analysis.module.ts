import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CommunicationAnalysisRoutingModule } from './communication-analysis-routing.module';
import { CommunicationsComponent } from './communications/communications.component';
import { CommunicationDetailComponent } from './communication-detail/communication-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { AngMusicPlayerModule } from  'ang-music-player';
import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { RolesGuard } from '../../guards/roles.guard';

@NgModule({
  declarations: [
    CommunicationsComponent,
    CommunicationDetailComponent,
  ],
  imports: [
    CommonModule,
    CommunicationAnalysisRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    AngMusicPlayerModule
  ],
  providers: [
    LocalizedDatePipe,
    DatePipe,
    TitleCasePipe,
    RolesGuard
  ]
})
export class CommunicationAnalysisModule { }
