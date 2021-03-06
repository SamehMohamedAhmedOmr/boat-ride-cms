
export class PermissionMarketingConfig {

	public MANAGE_SERVICES = 'MANAGE_SERVICES';
	public DELETE_SERVICES = 'DELETE_SERVICES';

	public MANAGE_OFFERS = 'MANAGE_OFFERS';
	public DELETE_OFFERS = 'DELETE_OFFERS';

	public MANAGE_BLOGS = 'MANAGE_BLOGS';
	public DELETE_BLOGS = 'DELETE_BLOGS';

	public MANAGE_SEO = 'MANAGE-SEO';
	public DELETE_SEO = 'DELETE_SEO';

	public SERVICES_PERMISSIONS = [
		this.MANAGE_SERVICES,
		this.DELETE_SERVICES,
	];

	public OFFERS_PERMISSIONS = [
		this.MANAGE_OFFERS,
		this.DELETE_OFFERS,
	];

	public BLOGS_PERMISSIONS = [
		this.MANAGE_BLOGS,
		this.DELETE_BLOGS,
	];

	public SEO_PERMISSIONS = [
		this.MANAGE_SEO,
		this.DELETE_SEO,
	];

}
