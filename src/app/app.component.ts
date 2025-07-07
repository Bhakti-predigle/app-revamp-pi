import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

//---------------------- Predigle-micro ---------------------------//
import { ThemeService, ThemeConfig } from '@predigle/micro/component-ui';
//----------------------------------------------------------------//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pi';
  
  constructor(

    //---------------------- Predigle-micro ---------------------------//
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
    //----------------------------------------------------------------//


  ) {
    
    //---------------------- Predigle-micro ---------------------------//
    themeService.setTheme(renderer, document, "light"); // Toggle between light and dark themes for all Storybook components
    //----------------------------------------------------------------//
  }
}
