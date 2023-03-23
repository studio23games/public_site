import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-social-hero',
  templateUrl: 'social-hero.component.html',
  styleUrls: ['social-hero.component.scss']
})

export class SocialHeroComponent implements OnInit {

  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();

  twitterLink = "https://twitter.com/studio23games";
  twitchLink = "https://www.twitch.tv/studio23games";
  discordLink = "https://discord.gg/KtDqaQJwNv";
  youtubeLink = "https://www.youtube.com/@Studio23games";

  constructor() {
  }

  ngOnInit() {
  }

  goToSocial(which: string) {
    this.linkClicked.emit(which);
  }

}
