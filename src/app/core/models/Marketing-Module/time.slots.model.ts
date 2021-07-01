import {ModelBase} from '../Base/base.model';

export class TimeSlotsModel extends ModelBase {

	public time:string;
	public label:string;
	public status:string;

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'time': this.time,
			'label': this.label,
		};
	}

}
