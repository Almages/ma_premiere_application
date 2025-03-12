import {Component} from '@angular/core';
import {DefaultComponent} from "../../templates/default/default.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [
    DefaultComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageSrc = "https://picsum.photos/id/1/200/200";
}
