import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';

export class SettingsModel extends ModelBase {

	public enable_coming_soon:boolean;
	public whatsapp_number:string;

	constructor(id: number){
		super(id);
	}


	public list() {
		return {
			'id': this.id,
			'enable_coming_soon' : this.enable_coming_soon,
			'whatsapp_number': this.whatsapp_number
		};
	}
}


