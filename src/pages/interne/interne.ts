import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deals } from '../../providers/deals';

@Component({
  selector: 'page-interne',
  templateUrl: 'interne.html'
})
export class InternePage {
    constructor(public navCtrl: NavController){}
}