import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-child',
  templateUrl: './country-child.component.html',
  styleUrls: ['./country-child.component.css']
})
export class CountryChildComponent implements OnInit, OnDestroy {

  countryId!: number;
  subscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.subscription = this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.countryId = +id;
        }
      });
  }

  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }

}
