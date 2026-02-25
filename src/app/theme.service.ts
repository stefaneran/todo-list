import { Injectable, signal } from '@angular/core';

export type Theme = 'default' | 'gothic';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('default');

  setTheme(theme: Theme) {
    document.body.classList.toggle('theme-gothic', theme === 'gothic');
    this.theme.set(theme);
  }
}
