import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';

export class SettingsModel extends ModelBase {

	public enable_coming_soon:boolean;
	public whatsapp_number:string;
	public home_section:string;
	public contact_number:string;

	constructor(id: number){
		super(id);
	}


	public list() {
		return {
			'id': this.id,
			'enable_coming_soon' : this.enable_coming_soon,
			'whatsapp_number': this.whatsapp_number,
			'home_section': this.home_section,
			'contact_number': this.contact_number,
		};
	}
}


