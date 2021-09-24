import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommunicationDetail } from 'src/app/core/models/real-time-communication.interface';
import { faLaugh, faFrown, faMeh } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-communication-detail',
  templateUrl: './communication-detail.component.html',
  styleUrls: ['./communication-detail.component.scss']
})
export class CommunicationDetailComponent implements OnInit {
  public title = ""
  public communicationDetail: CommunicationDetail | undefined;

  audioList = [
    {
      url: "",
      title: "",
      cover: ""
    }
  ];

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this.getDetailCommunication();
  }

  private getDetailCommunication(): void{
    this.activatedRoute.data.subscribe((data: Partial<{ communicationDetail: CommunicationDetail}>) => {
      const content = data.communicationDetail != null ? data.communicationDetail : undefined;
      this.communicationDetail = content;
      this.audioList[0].url = content!.record;
    });
  }

  getSentimentClassColor(sentiment: string): string {
    return `${sentiment.toLowerCase()}-sentiment-color`;
  }

  getIconSentiment(sentiment: string): any {
    if (sentiment == "POSITIVE"){
      return faLaugh;
    }else if (sentiment == "NEGATIVE") {
      return faFrown;
    }else {
      return faMeh;
    }
  }

  getTranscriptPersonClassColor(person: string): string {
    return `${person.toLowerCase()}-message`
  }
}
