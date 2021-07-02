import {ModelBase} from '../../Base/base.model';

export class YachtsTimeSlotsModel extends ModelBase {

	public time:string;
	public label:string;
	public status:string;

	public date:string;
	public yacht_id:number;

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'time': this.time,
			'label': this.label,
			'status' : this.status
		};
	}

}
