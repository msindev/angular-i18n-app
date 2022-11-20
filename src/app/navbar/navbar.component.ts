import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  availableLanguages = {
    English: $localize`:English Language Dropdown: English`,
    Hindi: $localize`:Hindi Language Dropdown:Hindi`,
  };
  availableLanguagesDropdown = Object.values(this.availableLanguages);
  selectedLanguage = this.availableLanguages.English;
}
