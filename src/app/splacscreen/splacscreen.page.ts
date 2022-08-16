import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splacscreen',
  templateUrl: './splacscreen.page.html',
  styleUrls: ['./splacscreen.page.scss'],
})
export class SplacscreenPage implements OnInit {

  constructor(public router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('accueil');
    },3000);
  }

  ngOnInit() {
  }

}
