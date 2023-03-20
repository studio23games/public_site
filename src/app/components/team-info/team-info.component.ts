import {AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['team-info.component.scss']
})

export class TeamInfoComponent implements OnInit, AfterViewInit {

  selectedMember!: TemplateRef<any>;

  members = ["Arkraga", "Diogenic"];
  cur = 0;

  @ViewChildren("teammate") templates!: QueryList<TemplateRef<any>>

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.selectedMember = this.templates.toArray()[0];
    this.cd.detectChanges();
  }

  selectMember(idx: number) {
    this.selectedMember = this.templates.toArray()[idx];
    this.cur = idx;
    this.cd.detectChanges();
  }

}
