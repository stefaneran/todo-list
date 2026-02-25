import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { ThemeService, Theme } from '../theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  lang = inject(LanguageService);
  themeService = inject(ThemeService);

  setTheme(event: Event) {
    const value = (event.target as HTMLSelectElement).value as Theme;
    this.themeService.setTheme(value);
  }
}
