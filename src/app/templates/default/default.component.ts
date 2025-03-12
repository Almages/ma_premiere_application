import {Component} from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {FooterComponent} from "../shared/footer/footer.component";

@Component({
  selector: 'app-default',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
