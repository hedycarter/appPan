import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab: any;
  @ViewChild('tabs') tabs: IonTabs;

  constructor(
    public router: Router
  ) {
    let tab = document.getElementsByTagName("ion-label");
  }

  ngOnInit() {
  }

  accueil(){
    this.router.navigate(['']);
  }

  tabSelectionner(){
    this.selectedTab = this.tabs.getSelected();
  }

}
