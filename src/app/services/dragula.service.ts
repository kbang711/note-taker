import { Injectable, EventEmitter } from '@angular/core';

import * as dragula from 'dragula';

@Injectable()
export class DragulaService {

  public cancel: EventEmitter<any> = new EventEmitter();
  public cloned: EventEmitter<any> = new EventEmitter();
  public drag: EventEmitter<any> = new EventEmitter();
  public dragend: EventEmitter<any> = new EventEmitter();
  public drop: EventEmitter<any> = new EventEmitter();
  public out: EventEmitter<any> = new EventEmitter();
  public over: EventEmitter<any> = new EventEmitter();
  public remove: EventEmitter<any> = new EventEmitter();
  public shadow: EventEmitter<any> = new EventEmitter();
  public dropModel: EventEmitter<any> = new EventEmitter();
  public removeModel: EventEmitter<any> = new EventEmitter();

  private events: Array<string> = [
    'cancel',
    'cloned',
    'drag',
    'dragend',
    'drop',
    'out',
    'over',
    'remove',
    'shadow',
    'dropModel',
    'removeModel'
  ];

  private bags: Array<any> = [];

  public add(name: string, drake: any): any {
    let bag = this.find(name);
    if(bag) {
      throw new Error('Bag named: "' + name + '" already exists.');
    }
    bag = {
      name: name,
      drake: drake
    };
    this.bags.push(bag);
    if(drake.models) {
      this.handleModels(name, drake);
    }
    if(!bag.initEvents) {
      this.setupEvents(bag);
    }
    return bag;
  }

}
