import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../../models/user';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

	user: User;

	constructor() {
	}

	ngOnInit() {

	}

	ngAfterViewInit(){
		this.user = new User();

		console.log(this.user.all(null, null, error => console.log(error)))
	}

}
