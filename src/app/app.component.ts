import {Subscription} from 'rxjs';
// Angular
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
// Layout
import {LayoutConfigService, SplashScreenService, TranslationService} from './core/_base/layout';
// language list
import {locale as enLang} from './core/_config/i18n/en';
import {locale as arLang} from './core/_config/i18n/ar';
import {LangService} from './core/services/lang.service';
import {PermissionsService} from './core/services/ACL-Module/permissions.service';
import {PermissionsModel} from './core/models/ACL-Module/permissions.model';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'body[kt-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
	// Public properties
	title = 'CMS';
	loader: boolean;
	private unsubscribe: Subscription[] = [];
	permissions:PermissionsModel[];

	/**
	 * Component constructor
	 *
	 * @param translationService: TranslationService
	 * @param router: Router
	 * @param cdr
	 * @param permissionsService
	 * @param layoutConfigService: LayoutCongifService
	 * @param splashScreenService: SplashScreenService
	 * @param langService
	 */
	constructor(private translationService: TranslationService,
				private router: Router,
				private cdr: ChangeDetectorRef,
				private permissionsService:PermissionsService,
				private layoutConfigService: LayoutConfigService,
				private splashScreenService: SplashScreenService,
				private langService: LangService) {
	}

	/**
	 * On init
	 */
	ngOnInit() {
		this.getPermissions();
		// register translations
		this.translationService.loadTranslations(enLang, arLang);
		// enable/disable loader
		this.loader = this.layoutConfigService.getConfig('loader.enabled');

		const routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				// hide splash screen
				this.splashScreenService.hide();

				// scroll to top on every route change
				window.scrollTo(0, 0);

				// to display back the body content
				setTimeout(() => {
					document.body.classList.add('kt-page--loaded');
				}, 500);
			}
		});
		this.unsubscribe.push(routerSubscription);
		this.langService.loadStyle();
	}

	getPermissions(){
		this.permissionsService.getMyPermission().subscribe(
			(data) => {
				this.permissions = data;
				let permissions_keys = this.permissions.map(permission => permission.key);
				localStorage.setItem('permissions', JSON.stringify(permissions_keys));
				this.cdr.markForCheck();
			}, error => {
			}
		);
	}
	/**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
