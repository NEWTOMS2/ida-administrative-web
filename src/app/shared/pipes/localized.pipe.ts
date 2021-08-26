import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
    private datePipe: DatePipe
  ) {}

  transform(value: any, pattern: string): any {
    return this.datePipe.transform(
      value,
      pattern,
      undefined,
      this.translateService.currentLang
    );
  }
}
