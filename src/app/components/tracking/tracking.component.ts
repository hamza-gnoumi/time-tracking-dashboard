import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  @Input()
  title: string = '';
  @Input()
  current;
  @Input()
  previous;
  @Input()
  ImageSource;
  color;
  ngOnInit(): void {
    this.color = this.title.trim().toLowerCase();
  }



}
