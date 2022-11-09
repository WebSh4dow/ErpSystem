
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Translation } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig, 
        private layoutService: LayoutService,
        private config: PrimeNGConfig, 
        private translateService: TranslateService,
    ) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;       //enables core ripple functionality

        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: true,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'lara-light-indigo',         //default component theme for PrimeNG
            scale: 14                           //size of the body font size to scale the whole application
        };

        this.translateService.setDefaultLang('pt');
        this.translateService.get('primeng')
          .subscribe((res: Translation) => this.config.setTranslation(res));
    }

}
