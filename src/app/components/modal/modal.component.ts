import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [
    trigger('fadeIn', [

      transition(':enter', [
        style({opacity: 0}),
        group([
          animate("0.1s", style({opacity: 1})),
          query("@childAnim", animateChild())
        ]),
      ])
    ]),
    trigger('childAnim', [
      transition(":enter", [
        style({opacity: 0}),
        animate("0.3s", style({opacity: 1}))
      ])
    ])
  ]
})

export class ModalComponent implements OnInit, OnChanges {
  visibleSubscription!: Subscription;

  @Input() modalVisible$!: Observable<boolean>;
  @Output() closeIntent: EventEmitter<void> = new EventEmitter<void>();

  internalModalVisible$ = new BehaviorSubject<boolean>(false);

  @HostListener("window:keydown.escape")
  closeModal() {
    if (this.internalModalVisible$.value)
      this.closeIntent.emit();
  }


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('modalVisible$' in changes) {
      if (this.visibleSubscription && !this.visibleSubscription.closed)
        this.visibleSubscription.unsubscribe();
      this.visibleSubscription = this.modalVisible$.subscribe(state => {
        this.internalModalVisible$.next(state)
      })
    }
  }
}
