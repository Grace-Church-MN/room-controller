import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	public tvs: any = [];

	constructor(private storage: Storage, private modalCtrl: ModalController) {
		this.storage.get('TVS').then((val) => {
			if(val){
				this.tvs = val;
			}
		});
	}

	ngOnInit() {
	}
	public addTV(){
		console.log(this.tvs);
		this.tvs.push({Name:"",Address:"", Functions:""});
	}
	public removeTV(i){
		console.log(i);
		this.tvs.splice(i, 1);
		console.log(this.tvs);
	}
	public save() {
		console.log(this.tvs);
		this.storage.set("TVS", this.tvs);
		this.modalCtrl.dismiss();
	}
}
