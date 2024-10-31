import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { IonicSelectableModule } from "ionic-selectable";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule
} from "@ngx-translate/core";
import { createTranslateLoader } from "./util/create-translate-loader.function";
import { CustomMissingTranslationHandler } from "./util/custom-missing-translation-handler.class";
import {
  IonIntlTelInputValidatorDirective
} from "./ion-intl-tel-input.directive";
import { IonIntlTelInputService } from "./ion-intl-tel-input.service";
import { IonIntlTelInputComponent } from "./ion-intl-tel-input/ion-intl-tel-input.component";
import { CountryPlaceholder } from "./pipes/country-placeholder";

@NgModule({
  declarations: [
    CountryPlaceholder,
    IonIntlTelInputValidatorDirective,
    IonIntlTelInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
    }),
  ],
  exports: [IonIntlTelInputComponent, IonIntlTelInputValidatorDirective],
  providers: [IonIntlTelInputService, IonicSelectableModule],
})
export class IonIntlTelInputModule {}
