import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'de';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Translations {
  title: string;
  placeholder: string;
  add: string;
  empty: string;
  itemsLeft: (n: number) => string;
  all: string;
  active: string;
  completed: string;
  clearCompleted: string;
  navHome: string;
  navFaq: string;
  navSettings: string;
  faqTitle: string;
  faqItems: FaqItem[];
  settingsTitle: string;
  themeLabel: string;
  themeDefault: string;
  themeGothic: string;
}

const translations: Record<Language, Translations> = {
  en: {
    title: 'Todo List',
    placeholder: 'What needs to be done?',
    add: 'Add',
    empty: 'No tasks here.',
    itemsLeft: (n) => `${n} item${n === 1 ? '' : 's'} left`,
    all: 'All',
    active: 'Active',
    completed: 'Completed',
    clearCompleted: 'Clear completed',
    navHome: 'Home',
    navFaq: 'FAQ',
    navSettings: 'Settings',
    faqTitle: 'FAQ',
    settingsTitle: 'Settings',
    themeLabel: 'Theme',
    themeDefault: 'Default',
    themeGothic: 'Gothic',
    faqItems: [
      {
        question: 'How was this built?',
        answer: "With Claude Code because I can't run away from the AI any longer since all my colleagues are using it, so I will fall behind if I don't.",
      },
      {
        question: 'How do you feel about using Claude?',
        answer: 'Honestly, defeated and resigned. But I have a wife and 2 cats to feed.',
      },
    ],
  },
  de: {
    title: 'Aufgabenliste',
    placeholder: 'Was muss erledigt werden?',
    add: 'Hinzufügen',
    empty: 'Keine Aufgaben hier.',
    itemsLeft: (n) => `${n} Aufgabe${n === 1 ? '' : 'n'} übrig`,
    all: 'Alle',
    active: 'Aktiv',
    completed: 'Abgeschlossen',
    clearCompleted: 'Erledigte löschen',
    navHome: 'Startseite',
    navFaq: 'FAQ',
    navSettings: 'Einstellungen',
    faqTitle: 'Häufige Fragen',
    settingsTitle: 'Einstellungen',
    themeLabel: 'Thema',
    themeDefault: 'Standard',
    themeGothic: 'Gotisch',
    faqItems: [
      {
        question: 'Wie wurde das gebaut?',
        answer: 'Mit Claude Code, weil ich der KI nicht mehr entkommen kann – alle meine Kollegen nutzen sie bereits und ich würde zurückfallen, wenn ich es nicht täte.',
      },
      {
        question: 'Wie fühlen Sie sich beim Einsatz von Claude?',
        answer: 'Ehrlich gesagt geschlagen und resigniert. Aber ich habe eine Frau und 2 Katzen zu ernähren.',
      },
    ],
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language = signal<Language>('en');
  t = computed(() => translations[this.language()]);

  setLanguage(lang: Language) {
    this.language.set(lang);
  }
}
