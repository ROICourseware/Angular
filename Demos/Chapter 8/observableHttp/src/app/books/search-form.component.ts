import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchText = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.searchText.emit('');
  }

  search(term: string) {
    this.searchText.emit(term);
  }

}
