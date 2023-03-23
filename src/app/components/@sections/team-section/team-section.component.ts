import {AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {ConfirmService} from "../../../services";

@Component({
  selector: 'app-team-section',
  templateUrl: 'team-section.component.html',
  styleUrls: ['team-section.component.scss']
})

export class TeamSectionComponent implements OnInit, AfterViewInit {
  selectedMember!: TemplateRef<any>;

  members = ["Arkraga", "Diogenic"];
  cur = 0;

  @ViewChildren("teammate") templates!: QueryList<TemplateRef<any>>

  constructor(private cd: ChangeDetectorRef, private confirm: ConfirmService) {
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

  goToLink(which: string) {
    this.confirm.confirmLink({
      link: which,
      confirmAction: () => {
        window.open(which, "_blank")
      }
    });
  }
}
