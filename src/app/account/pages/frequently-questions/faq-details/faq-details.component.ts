import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

import { faqTypes } from 'src/app/core/config/configuration';
import { Answer, Faq } from 'src/app/core/models/faq.interface';
import { FaqService } from 'src/app/core/services/faq.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss']
})
export class FaqDetailsComponent implements OnInit {
  @Input() faq!: Faq
  faqForm!: FormGroup;
  faqTypes!: any[]
  spinnerLoader =false;
  constructor(
    private formBuilder: FormBuilder,
    private faqService: FaqService,
    private notification: NotificationsService,
    private translateService: TranslateService,
    private _ngZone: NgZone

  ) { }


  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {
    this.buildSelectorData()
    this.buildForm();

  }

  private buildSelectorData(): void {
    this.faqTypes = faqTypes.map((type) =>{
      return {
        type: type,
        translatedType:  searchTranslation(this.translateService, type)
      }
    })
  }


 async  updateFAQ(): Promise<void> {
    if (this.faqForm.valid && this.faqForm.dirty){
      try{
        this.spinnerLoader = true;
        await this.updateFaqAnswers();
        await this.updateFaqType();
  
        this.spinnerLoader = false;
        this.notification.showSuccessToast('FAQ_UPDATED');
      }catch(err){
         this.spinnerLoader = false;
         this.notification.showErrorToast("GENERIC_ERROR");
      }  
    }
  }

  async updateFaqType(): Promise<void>{
    if (this.faqForm.get('type')?.dirty) {
      const type = this.faqTypes.find((type) => type.translatedType == this.faqForm.get('type')?.value).type
      await this.faqService.udpateFaqType(this.faq.dw_intent, type).toPromise()
    }
  }

  async updateFaqAnswers(): Promise<void>{
       const answers = this.getFaqAnswer();

       await Promise.all(answers.map(async (answer) => {
        return  await this.faqService.updateFaqAnswer(answer).toPromise()
       }))
  }

  getFaqAnswer(): Answer[]{
     return (Object.entries(this.faqForm.value)).filter((value)=> value[0].includes('answer')).map((answer) =>{
      const index = parseInt((answer[0].split('-'))[1])
      return {
        answer: answer[1] as string,
        id: this.faq.answers[index].id,
        intent: this.faq.answers[index].intent,
      }
    })
  }


  private buildForm(): void {
    let allFaqs: any = {}
    console.log( this.faq)
    this.faq.answers.map((answer, i) => {
      allFaqs['answer-' + i] = [answer.answer, Validators.compose([Validators.required])]
    })

    console.log(this.faq)
    this.faqForm = this.formBuilder.group({
      ...allFaqs,
      type: [this.faq.type]
  });
  }
}
