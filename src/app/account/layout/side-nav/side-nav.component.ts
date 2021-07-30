import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faPhoneAlt, faQuestionCircle, faEnvelopeOpenText, faCogs, faUsers} from '@fortawesome/free-solid-svg-icons';

import { searchTranslation } from 'src/app/utils/searchTranslation';
import { images, routes } from '../../../core/config/configuration'
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';


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
  public allowedOptions: any[] = [];
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
    private translateService: TranslateService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = JSON.parse((this.authService.decrypt(localStorage.getItem('user') || "", environment.encryptKey)))

    let roleRoutes = ((user.role == 'ADMIN') ? routes.ADMIN : routes.AGENT).map((route) => `/account/${route}`)
    this.menuOptions.forEach((option) => {
      if (roleRoutes.includes(option.link))
        this.allowedOptions.push(option)
    })
  }
}
