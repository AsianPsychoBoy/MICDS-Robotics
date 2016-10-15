import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private router: Router, private titleService: Title) {};
	ngOnInit() {
		this.router.events.subscribe((event: any) => {
			if (typeof event.urlAfterRedirects === 'string') {
				this.titleService.setTitle('MICDS Robotics - ' + event.urlAfterRedirects.slice(1));
			}
		});
	}
}
