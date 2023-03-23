import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DateTime} from "luxon";
import {BehaviorSubject, interval, map} from "rxjs";
import {UiStateService} from "../../../services";

@Component({
  selector: 'app-project-section',
  templateUrl: 'project-section.component.html',
  styleUrls: ['project-section.component.scss']
})

export class ProjectSectionComponent implements OnInit {
  targetDate = DateTime.fromISO("2023-03-20")
    .plus({day: 180})
    .diff(DateTime.now());

  countdown$: BehaviorSubject<RemainingTime> = new BehaviorSubject<RemainingTime>({
    days: "180",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });


  constructor(private uiService: UiStateService) {
    interval(1000).pipe(
      map(seconds => this.targetDate.minus({seconds: seconds})),
      map(dateTime => dateTime.toFormat("dd:hh:mm:ss").split(":")),
      map(s => ({days: s[0], hours: s[1], minutes: s[2], seconds: s[3]} as RemainingTime))
    ).subscribe(remainingTime => this.countdown$.next(remainingTime))
  }

  ngOnInit() {
  }

  toggleModal() {
    this.uiService.setShowForm(true);
  }

}

export type RemainingTime = {
  hours: string;
  days: string;
  minutes: string;
  seconds: string;
}
