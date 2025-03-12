import {Component} from '@angular/core';
import {FormControl, FormsModule} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-search-component',
  imports: [
    FormsModule
  ],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponentComponent {

  searchControl = new FormControl();

  $searchResult = this.searchControl.valueChanges.pipe(
    debounceTime(300),

  );
}
