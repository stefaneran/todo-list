import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Language } from '../language.service';

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  lang = inject(LanguageService);
  isOpen = signal(false);

  languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'de', label: 'Deutsch', flag: 'de' },
  ];

  get current(): LanguageOption {
    return this.languages.find(l => l.code === this.lang.language())!;
  }

  toggleDropdown() {
    this.isOpen.update(v => !v);
  }

  selectLanguage(code: Language) {
    this.lang.setLanguage(code);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.lang-picker')) {
      this.isOpen.set(false);
    }
  }
}
