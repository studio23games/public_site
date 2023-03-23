import {Component, OnInit} from '@angular/core';
import {ConfirmService} from "../../services/confirm.service";

@Component({
  selector: 'app-footer-content',
  templateUrl: 'footer-content.component.html',
  styleUrls: ['footer-content.component.scss']
})

export class FooterContentComponent implements OnInit {
  twitterLink = "https://twitter.com/studio23games";
  twitchLink = "https://www.twitch.tv/studio23games";
  discordLink = "https://discord.gg/KtDqaQJwNv";
  youtubeLink = "https://www.youtube.com/@Studio23games";

  constructor(private confirm: ConfirmService) {
  }

  ngOnInit() {
  }

  goToSocial(which: string) {
    this.confirm.confirmLink(
      {
        link: which,
        confirmAction: () => {
          window.open(which, "_blank")
        },
      })
  }

}
