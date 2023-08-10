import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
