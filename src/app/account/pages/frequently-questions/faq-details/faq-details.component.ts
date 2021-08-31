import { Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faqTypes } from 'src/app/core/config/configuration';
import { Answer, Faq } from 'src/app/core/models/faq.interface';
import { FaqService } from 'src/app/core/services/faq.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { take } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

interface newAnswer {
  answer: string;
}

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss']
})
export class FaqDetailsComponent implements OnInit {
  @Input() faq!: Faq
  @Output() faqTypeUpdated = new EventEmitter<any>();
  faqForm!: FormGroup;
  newAnswersForm!: FormGroup;
  newAnswers: newAnswer[] = [];
  faqTypes!: any[]
  spinnerLoader = false;
  faTrash = faTrash;
  updatingAnswers = false;

  constructor(
    private formBuilder: FormBuilder,
    private faqService: FaqService,
    private notification: NotificationsService,
    private translateService: TranslateService,
    private _ngZone: NgZone,
    private modalService: NgbModal
  ) { }


  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {
    this.buildSelectorData()
    this.buildForm();
    this.buildNewAnswersForm();
    this.setDeleteAttributeToAnswer();
  }

  private buildSelectorData(): void {
    this.faqTypes = faqTypes.map((type) => {
      return {
        type: type,
        translatedType: searchTranslation(this.translateService, type)
      }
    })
  }

  setDeleteAttributeToAnswer(): void {
    this.faq.answers.sort((a, b) => a.id! - b.id!);
    this.faq.answers = this.faq.answers.map(obj => ({ ...obj, selectedToBeDeleted: false }));
  }

  async saveChanges(): Promise<void> {
    if (this.faqForm.valid && this.faqForm.dirty) {
      try {
        this.spinnerLoader = true;
        await this.updateFaqAnswers();
        await this.updateFaqType();

        this.spinnerLoader = false;
        this.notification.showSuccessToast('FAQ_UPDATED');
      } catch (err) {
        this.spinnerLoader = false;
        this.notification.showErrorToast("GENERIC_ERROR");
      }
    }
    if (this.newAnswersForm.dirty) {
      let newAnswersArray: any[] = [];
      Object.values(this.newAnswersForm.value).map((answer) => {
        if (answer != "") newAnswersArray.push({ answer })
      });
      if (newAnswersArray.length > 0) {
        try {
          this.spinnerLoader = true;
          await this.createNewAnswers(newAnswersArray);
          this.newAnswers = [];
          this.addNewAnswerToExistingAnswersFormControl(newAnswersArray);
          this.refreshAnswers();
          this.newAnswersForm = this.formBuilder.group({})
          this.spinnerLoader = false;
          this.notification.showSuccessToast('ANSWER_ADDED');
        } catch (err) {
          this.spinnerLoader = false;
          this.notification.showErrorToast("GENERIC_ERROR");
        }
      }
    }
  }

  async updateFaqType(): Promise<void> {
    if (this.faqForm.get('type')?.dirty) {
      const type = this.faqTypes.find((type) => type.translatedType == this.faqForm.get('type')?.value).type
      await this.faqService.udpateFaqType(this.faq.dw_intent, type).toPromise()
      this.faqTypeUpdated.emit({faq: this.faq.dw_intent, type: type})
    }
  }

  async updateFaqAnswers(): Promise<void> {
    const answers = this.getFaqAnswer();
    await Promise.all(answers.map(async (answer) => {
      return await this.faqService.updateFaqAnswer(answer).toPromise()
    }))
  }

  async createNewAnswers(newAnswersArray: any): Promise<void> {
    return await this.faqService.createAnswer(newAnswersArray, this.faq.dw_intent).toPromise();
  }

  getFaqAnswer(): Answer[] {
    return (Object.entries(this.faqForm.value)).filter((value) => value[0].includes('answer')).map((answer) => {
      const index = parseInt((answer[0].split('-'))[1])
      return {
        answer: answer[1] as string,
        id: this.faq.answers[index].id,
        intent: this.faq.answers[index].intent,
      }
    })
  }

  addAnswer(): void {
    const newAnswer = {
      answer: ""
    }
    const le = this.newAnswers.length;
    this.newAnswersForm.addControl('answer-' + (le), this.formBuilder.control(newAnswer.answer, Validators.compose([Validators.required])));
    this.newAnswers.push(newAnswer);
  }

  addNewAnswerToExistingAnswersFormControl(answers: any): void {
    const le = this.faq.answers.length;
    answers.map((a: any, index: number) => {
      this.faqForm.addControl('answer-' + (le + index), this.formBuilder.control(a.answer, Validators.compose([Validators.required])));
    })
  }

  toogleDeleteAnswer(answerId: number): void {
    const answer = this.faq.answers.findIndex((obj => obj.id == answerId));
    this.faq.answers[answer].selectedToBeDeleted = !this.faq.answers[answer].selectedToBeDeleted;
  }

  async deleteAnswers(): Promise<void> {
    const answersToDelete = this.faq.answers.filter(obj => obj.selectedToBeDeleted == true);
    this.modalService.dismissAll('Answers Deleted');
    await Promise.all(answersToDelete.map(async (answer) => {
      return await this.faqService.deleteAnswer(answer.intent!, answer.id!).toPromise();
    })).then(() => {
      this.notification.showSuccessToast('FAQ_UPDATED');
      this.refreshAnswers().then(() => {
        this.faqForm = this.formBuilder.group({})
        this.buildForm();
      });
    }).catch((error) => {
      this.notification.showErrorToast("GENERIC_ERROR");
    });
  }

  async refreshAnswers(): Promise<void> {
    this.updatingAnswers = true;
    await this.faqService.get("?intent=" + this.faq.dw_intent).toPromise().then((faq) => {
      this.faq.answers = [];
      this.faq.answers = faq[0].answers;
      this.faq.type = faq[0].type;
      this.setDeleteAttributeToAnswer();
      this.updatingAnswers = false;
    })
  };

  private buildForm(): void {
    let allFaqs: any = {}
    this.faq.answers.map((answer, i) => {
      allFaqs['answer-' + i] = [answer.answer, Validators.compose([Validators.required])]
    })
    this.faqForm = this.formBuilder.group({
      ...allFaqs,
      type: [this.faq.type]
    });
  }

  private buildNewAnswersForm(): void {
    this.newAnswersForm = this.formBuilder.group({});
  }

  openConfirmationModal(content: any): void {
    const answersToDelete = this.faq.answers.filter(obj => obj.selectedToBeDeleted == true);
    if (answersToDelete.length > 0) {
      this.modalService
        .open(content, {
          centered: true,
        })
        .result.then(
          () => { },
          () => { }
        );
    }
  }
}
