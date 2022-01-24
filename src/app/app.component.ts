import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Platform, ModalController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsPage } from './pages/settings/settings.page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
	@ViewChild('hiddenButton') hiddenButton: ElementRef;
	private clicks: number = 0;
	private clickTimer: any;
	private clickTimerActive: boolean = false;

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private modalCtrl: ModalController) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	public handleHiddenClick() {
		console.log("click");
		if (this.clickTimerActive) {
			if (this.clicks == 5) {
				this.clickTimerActive = false;
				this.clicks = 0;
				//console.log(this.numpadRef);
				this.showSettings()
			} else {
				this.clicks++;
			}
		} else {
			this.clickTimerActive = true;
			this.clickTimer = setTimeout(() => { this.clickTimerActive = false; this.clicks = 0; }, 2000)
		}
	}
	private async showSettings() {
		const modal = await this.modalCtrl.create({
			component: SettingsPage,
		});
		modal.onDidDismiss().then((data) => {
			document.location.reload();
		});
		return await modal.present();
	}

}
