import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'country',
    template: `<h1>You picked {{ countryId }} </h1>`
})
export class CountryComponent implements OnInit {
    countryId: number;
    subscription: any;
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.countryId = +this.route.snapshot.params['id'];
        // this.subscription = this.route.params.subscribe(params => {
        //     this.countryId = +params['id'];
        // });
    }

    ngOnDestroy() {
     //   this.subscription.unsubscribe();
    }
}