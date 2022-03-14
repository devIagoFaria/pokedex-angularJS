import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poker-search',
  templateUrl: './poker-search.component.html',
  styleUrls: ['./poker-search.component.css']
})
export class PokerSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emitSearch.emit(value)
  }

}
