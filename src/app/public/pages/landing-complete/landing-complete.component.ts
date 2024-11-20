import {Component, NgIterable} from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatFabAnchor,
  MatIconAnchor,
  MatIconButton
}
  from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardModule} from "@angular/material/card";
import {CommonModule, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatList, MatListItem, MatListModule, MatListSubheaderCssMatStyler, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-landing-complete',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterLink,
    MatIcon,
    MatToolbar,
    MatToolbarModule,
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatIconAnchor,
    MatButton,
    MatButtonModule,
    MatListModule,
    MatListItem,
    MatGridListModule,
    MatFabAnchor,
    MatListSubheaderCssMatStyler,
    MatList,
    MatGridList,
    MatGridListModule,
    MatGridTile,
    MatCardImage,
    MatFormField,
    MatInput,
    MatLabel,
    TranslateModule,
    LanguageSwitcherComponent


  ],
  templateUrl: './landing-complete.component.html',
  styleUrl: './landing-complete.component.css'


})
export class LandingCompleteComponent {

}
