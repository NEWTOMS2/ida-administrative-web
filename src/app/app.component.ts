import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ida-admin-web-app';
  languages = [
    { language: 'es', term: 'ES' },
    { language: 'en', term: 'EN' },
  ];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.defaultLanguage);
    this.translate.use(environment.defaultLanguage);

    const langs:any = [];
    this.languages.map((el) => {
      langs.push(el.language);
    });
    this.translate.addLangs(langs);
  }
}
