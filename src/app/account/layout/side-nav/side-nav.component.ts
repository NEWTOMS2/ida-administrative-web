import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faPhoneAlt, faQuestionCircle, faEnvelopeOpenText, faCogs, faUsers} from '@fortawesome/free-solid-svg-icons';

import { searchTranslation } from 'src/app/utils/searchTranslation';
import { images } from '../../../core/config/configuration'


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public phoneIcon = faPhoneAlt
  public questionIcon = faQuestionCircle
  public requestsIcon = faEnvelopeOpenText
  public mvnoInformationIcon = faCogs
  public users = faUsers
  public sideNavLogo = images.applicationLogo

  public menuOptions = [
    {
      name: searchTranslation(this.translateService, 'ATTENTION_CENTER'),
      link: '/account/attention',
      icon: this.phoneIcon,
    },
    {
      name: searchTranslation(this.translateService, 'FREQUENTLY-QUESTIONS'),
      link: '/account/frequently-questions',
      icon: this.questionIcon
    },
    {
      name: searchTranslation(this.translateService, 'ATTENTION_REQUESTS'),
      link: '/account/tickets',
      icon: this.requestsIcon
    },
    {
      name: searchTranslation(this.translateService, 'MVNO_INFORMATION'),
      link: '/account/mvno-information',
      icon: this.mvnoInformationIcon
    },
    {
      name: searchTranslation(this.translateService, 'USERS'),
      link: '/account/users',
      icon: this.users
    }
  ]
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }
}
