import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {BlogSerializer} from '../../Serializers/Marketing-Module/blog.serializer';
import {BlogModel} from '../../models/Marketing-Module/blogs.model';

@Injectable({
	providedIn: 'root'
})

export class BlogService extends BaseService<BlogModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/blogs',
			new BlogSerializer());
	}


}
