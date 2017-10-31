import { Directive,
  Input,ElementRef,
  OnInit, OnChanges,
  SimpleChange } from '@angular/core';
import * as dragula from 'dragula';

import { DragulaService } from '../services';

@Directive({
  selector: '[dragula]'
})
export class DragulaDirective implements OnInit, OnChanges {
  @Input('dragula') bag: string;
  @Input() dragulaModel: any;
  private container: any;
  private drake: any;

  constructor(private el: ElementRef, private dragulaService: DragularService) {
    this.container = el.nativeElement;
  }

  ngOnInit() {

  }

  ngOnChanges() {
    
  }

}
