import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-child',
  templateUrl: './country-child.component.html',
  styleUrls: ['./country-child.component.css']
})
export class CountryChildComponent implements OnInit, OnDestroy {
  
  countryId: number;
  subscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
      this.subscription = this.route.paramMap.subscribe(params => {
          this.countryId = +params.get('id');
      });
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }
}

