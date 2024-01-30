import { Component, OnInit } from '@angular/core';
import { TimeUnit } from './model/TimeUnit';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'time-tracking-dashboard';
  data: Array<TimeUnit>;

  constructor(private http: HttpClient) { }
  type: string = 'monthly';
  ngOnInit(): void {
    const url: string = '../assets/data.json';
    const data = this.http.get(url).subscribe(
      (res: Array<TimeUnit>) => {
        this.data = res;
      }
    )


  }


  showdaily() {
    this.type = 'daily';
  }
  showmonthly() {
    this.type = 'monthly';
  }
  showweekly() {
    this.type = 'weekly';
  }

  ImageSources = [
    "../../assets/images/icon-work.svg",
    "~/../../assets/images/icon-play.svg",
    "../../assets/images/icon-study.svg",
    "../../assets/images/icon-exercise.svg",
    "../../assets/images/icon-social.svg",
    "../../assets/images/icon-self-care.svg",
  ]

}
