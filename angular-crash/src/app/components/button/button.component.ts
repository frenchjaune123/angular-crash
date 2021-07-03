import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Whats the difference between importing EventEmitter from
// 'stream' instead of '@angular/core'
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  
  //Edited code below. WTF
  @Output() btnClick: EventEmitter<any> = new EventEmitter;


  //TS 2.7 adds new flag: --strictPropertyInitialization
  //Each instance property must be properly initialized in the body.
  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html
  constructor() {
    this.text = "";
    this.color = "";
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
