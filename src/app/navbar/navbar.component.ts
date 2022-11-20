import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  availableLanguages = [
    { code: 'en-US', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
  ];

  selectedLanguage = 'English';

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}
  ngOnInit(): void {
    this.selectedLanguage =
      this.availableLanguages.find(
        (localeObj) => localeObj.code === this.localeId
      )?.name ?? '';
  }

  changeLocale(locale: string): void {
    window.location.href = window.location.origin + '/' + locale;
  }
}
