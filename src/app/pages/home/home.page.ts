import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	private apiBase: string;
	public tvs: any = [];
	constructor(private http: HttpClient, private storage: Storage,) {
		this.storage.get('TVS').then((val) => {
			if(val){
				this.tvs = val;
			}
			console.log(this.tvs);
		});
	}

	public sendCommand(address, command){
		console.log(address);
		console.log(command);
		this.http.post("http://"+address, command).subscribe((data) => {
		});
	}

}
