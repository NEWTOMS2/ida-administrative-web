import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { languages  } from '../app/core/config/configuration';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ida-admin-web-app';
  isSpinnerVisibile$: Observable<boolean> = this.navigationService.isNavigationPending$

  constructor(
    private translate: TranslateService,
    private navigationService: NavigationService
  ) {
    this.translate.setDefaultLang(environment.defaultLanguage);
    this.translate.use(environment.defaultLanguage);

    const langs:any = [];
    languages.map((el) => {
      langs.push(el.language);
    });
    this.translate.addLangs(langs);
  }
}
