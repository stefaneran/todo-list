import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  lang = inject(LanguageService);
}
