import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deals } from '../../providers/deals';
import { InternePage } from '../interne/interne';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private alldeals: any;
  constructor(public navCtrl: NavController, private deals: Deals, private storage: Storage) {

  }

ionViewDidEnter(){
 this.deals.getDeals().subscribe(data => {
   this.storage.ready().then(() => {
       this.storage.set('allDeals', data);
       this.alldeals = data;
     });
 });
 
}

voirDeal(){
  //this.navCtrl.setRoot(InternePage);
  this.navCtrl.push(InternePage);
}


}
