import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})


export class SearchComponentComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onEnter(value){
    this.searchValue.emit(value)
  }

}
