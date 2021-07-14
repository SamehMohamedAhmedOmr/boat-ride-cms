import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {PermissionsService} from '../services/ACL-Module/permissions.service';

@Injectable({
	providedIn: 'root'
})
export class PermissionsGuard {

	route_permissions:Array<string>;
	constructor(private router: Router,
				private permissionsService: PermissionsService) {

	}

	canActivate(route: ActivatedRouteSnapshot,
				state: RouterStateSnapshot): boolean {

		let permissions = route.data.permissions as Array<string>;

		this.route_permissions = permissions;

		let stored_permissions = JSON.parse(localStorage.getItem('permissions'));

		if (!stored_permissions) {
			return this.getPermission();
		}
		else {
			return this.checkPermissions(stored_permissions, permissions);
		}
	}

	checkPermissions(stored_permissions, permissions){

		let has_permission = false;
		permissions.forEach((permission)=>{
			let check = stored_permissions.includes(permission);
			if (check){
				has_permission = true;
			}
		});

		if (!has_permission){
			this.router.navigate(['/cms/dashboard']);
		}

		return has_permission;
	}

	getPermission() {
		let check = false;
		this.permissionsService.getMyPermission().subscribe(
			(resp) => {
				let permissions_keys = resp.map(permission => permission.key);
				localStorage.setItem('permissions', JSON.stringify(permissions_keys));
				check = this.reactivate(permissions_keys);
			},
			(handler) => {
			}
		);
		return check;
	}

	reactivate(stored_permissions){
		return this.checkPermissions(stored_permissions, this.route_permissions);
	}

}
