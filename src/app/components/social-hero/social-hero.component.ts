import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-social-hero',
  templateUrl: 'social-hero.component.html',
  styleUrls: ['social-hero.component.scss']
})

export class SocialHeroComponent implements OnInit {

  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();

  twitterLink = "";
  twitchLink = "";
  discordLink = "";
  youtubeLink = "";



  constructor() {
  }

  ngOnInit() {
  }

  goToSocial(which: string) {
    this.linkClicked.emit(which);
  }

}
