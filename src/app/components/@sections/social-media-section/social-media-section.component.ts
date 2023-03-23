import {Component, OnInit} from '@angular/core';
import {ConfirmService} from "../../../services";

@Component({
  selector: 'app-social-media-section',
  templateUrl: 'social-media-section.component.html',
  styleUrls: ['social-media-section.component.scss']
})

export class SocialMediaSectionComponent implements OnInit {
  links = [
    {
      cls: "discord",
      link: "https://discord.gg/KtDqaQJwNv",
      icon: "fa-discord",
      tagline: "Join us on Discord"
    },
    {
      cls: "twitch",
      link: "https://www.twitch.tv/studio23games",
      icon: "fa-discord",
      tagline: "Watch us on Twitch"
    },
    {
      cls: "youtube",
      link: "https://www.youtube.com/@Studio23games",
      icon: "fa-youtube",
      tagline: "Find us on Youtube"
    },
    {
      cls: "twitter",
      link: "https://twitter.com/studio23games",
      icon: "fa-twitter",
      tagline: "Talk to us on Twitter"
    }
  ];

  constructor(private confirm: ConfirmService) {
  }

  ngOnInit() {
  }

  clickLink(which: string) {
    this.confirm.confirmLink({
      link: which,
      confirmAction: () => window.open(which, "_blank")
    })
  }

}
