import { TranslateService } from '@ngx-translate/core';

export function searchTranslation(
  translateService: TranslateService,
  name: string
): string {
  let msg: string =  "";
  translateService.stream(name).subscribe((translation: string) => {
    msg = translation;
  });
  return msg;
}
