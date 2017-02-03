import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styles: ['dt,dd { font-size: 1.5em; } dd { margin-left: 30px }']
})
export class AboutComponent implements OnInit {

    demo: any = {
        myDate: new Date(),
        lowerCaseText: "i was originally in lowercase",
        upperCaseText: "I WAS ORIGINALLY IN UPPERCASE",
        mixedCaseText: "I was originally in  Mixed Case",
        myNumber: 0.427,
        myLargeNumber: 365
    }

    ngOnInit() { 
        console.log(this.demo.myDate);
    }

}