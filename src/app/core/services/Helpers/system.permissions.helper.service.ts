import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class SystemPermissionsHelperService {

	public checkPermissions(permissions){

		let stored_permissions = JSON.parse(localStorage.getItem('permissions'));

		if (!stored_permissions){
			return false;
		}

		let has_permission = false;

		permissions.forEach((permission)=>{
			let check = stored_permissions.includes(permission);
			if (check){
				has_permission = true;
			}
		});

		if (!permissions.length){
			has_permission = false;
		}

		return has_permission;
	}

}
