import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryId: number;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
      this.countryId = +this.route.snapshot.paramMap.get('id');
  }

}
