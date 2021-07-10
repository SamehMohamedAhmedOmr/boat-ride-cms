// USA
export const locale = {
	lang: 'en',
	data: {

		MENU: {
			NEW: 'new',
			SHORT_ACCESS: 'Short Access',
			ADD_NEW: 'Add new',
			APPS: 'Apps',
			DASHBOARD: 'Dashboard',
			STAND: 'standards',
			LOGOUT: 'Logout',
			ANALS: 'Analytics and Charts',
			LANG: {
				AR: 'Arabic',
				EN: 'English',
			},
			DATA_TABLE: 'Data Table',
		},

		VALIDATION: {
			INVALID: '{{name}} is not valid',
			REQUIRED: '{{name}} is required',
			REQUIRED_F: '{{name}} is required',
			MIN_LENGTH: '{{name}} minimum length is {{min}}',
			AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
			NOT_FOUND: 'The requested {{name}} is not found',
			INVALID_LOGIN: 'The login detail is incorrect',
			REQUIRED_FIELD: 'Required field',
			MIN_LENGTH_FIELD: 'Minimum field length:',
			MAX_LENGTH_FIELD: 'Maximum field length:',
			INVALID_FIELD: '{{name}} is not valid',
		},

		STATISTICS: {
			name: 'Statistics',
			visitors_count: '',
			link: 'Open {{title}} List',
			yacht_count: 'yacht count',
			water_sport_count: 'water sport count',
			yacht_reserved_trips_count: 'yacht reserved trips count',
			yacht_confirmed_trips_count: 'yacht confirmed trips count',
			water_sport_reserved_trips: 'water sport reserved trips',
			water_sport_confirmed_trips: 'water sport confirmed trips',
		},

		MENUS: {
			USERS: {
				TITLE: 'Users',
				MENU: {
					ADMINS: 'CMS Users',
					ROLES: 'Roles',
				},

			},
			MARKETING: {
				TITLE: 'Marketing',
				MENU: {
					BANNERS: 'Banners',
					SERVICES: 'Services',
					OFFERS: 'Offers',
					BLOGS: 'Blogs',
					SEO: 'Seo',
				}
			},
			YACHT_SETTINGS: {
				TITLE: 'Yacht Management',
				MENU: {
					YACHTS: 'Yachts',
					YACHTS_RESERVATION: 'Yachts Reservation',
				}
			},
			WATER_SPORT_SETTINGS: {
				TITLE: 'Water Sport Management',
				MENU: {
					WATER_SPORTS: 'Water Sports',
					WATER_SPORTS_RESERVATION: 'Water Sports Reservation',
				}
			},
		},


		AUTH: {
			GENERAL: {
				OR: 'Or',
				SUBMIT_BUTTON: 'Submit',
				NO_ACCOUNT: 'Don\'t have an account?',
				SIGNUP_BUTTON: 'Sign Up',
				FORGOT_BUTTON: 'Forgot Password',
				BACK_BUTTON: 'Back',
				PRIVACY: 'Privacy',
				LEGAL: 'Legal',
				CONTACT: 'Contact',
			},
			LOGIN: {
				TITLE: 'Login Account',
				BUTTON: 'Sign In',
			},
			FORGOT: {
				TITLE: 'Forgotten Password?',
				DESC: 'Enter your email to reset your password',
				SUCCESS: 'Your account has been successfully reset.'
			},
			REGISTER: {
				TITLE: 'Sign Up',
				DESC: 'Enter your details to create your account',
				SUCCESS: 'Your account has been successfuly registered.'
			},
			INPUT: {
				EMAIL: 'Email',
				FULLNAME: 'Fullname',
				PASSWORD: 'Password',
				CONFIRM_PASSWORD: 'Confirm Password',
				USERNAME: 'Username'
			},
		},

		Components: {
			item_per_page: 'Item Per Page',
			filter_by: 'Filter by',
			actions: 'Actions',
			all: 'All',
			marked: 'Marked',
			active: 'Active',
			is_active: 'InActive',
			items: 'items',
			id: 'Id',
			options: 'Options',
			Edit: 'Edit',
			Details: 'Details',
			Delete: 'Delete',
			Close: 'Close',
			Search: 'Search',
			ItemNotFound: 'No Result found',
			Images: 'Images',
			status: 'Status',
			date: 'Date',
			Select: 'Select',
			export: 'Export',
			no_image: 'No Image Yet',
			Accept: 'Accept',
			Reject: 'Reject',
			Pending: 'Pending',

			price: 'Price',
			image: 'Image',

			apply_vat: 'apply vat',
			images: 'images',

			yes: 'Yes',
			no: 'No',

			from: 'From',
			to: 'To',

			SERVICES: {
				name: 'Services',
				single: 'Service',
				columns: {
					price_model: 'Price Model',
					minimum_hours_booking: 'Minimum hours booking',
					max_quantity: 'Max Quantity',
				}
			},

			OFFERS: {
				name: 'Offers',
				single: 'Offer',
				columns: {
					valid_date: 'Valid Date',
				}
			},

			BLOGS: {
				name: 'Blogs',
				single: 'Blog',
				columns: {
					label_en: 'Label in English',
					label_ar: 'Label in Arabic',
					author: 'Author',
				}
			},

			SEO: {
				name: 'SEO',
				single: 'SEO',
				columns: {
					url: 'Url',
					keywords_ar: 'Keywords in Arabic',
					keywords_en: 'Keywords in English',
				}
			},

			BANNERS: {
				name: 'Banners',
				single: 'Banner',
				columns: {
					type: 'Type',
					link: 'Link',
					image: 'Image',
				}
			},

			ROLES: {
				name: 'Roles',
				single: 'Role',
				columns: {
					permissions: 'Permissions',
					select_all: 'Select all',
					selected_permission: 'Number of Selected Permission',
				}
			},

			CMS_USERS: {
				name: 'CMS Users',
				single: 'CMS User',
				columns: {}
			},

			YACHTS: {
				name: 'Yachts',
				single: 'Yacht',
				basic_information: 'Basic Information',
				technical_information: 'Technical Information',
				descriptions: 'Descriptions',
				key_features: 'Key Features',
				columns: {
					/* Basic Information*/
					basic_information: {
						type: 'Type',
						code: 'Code',
						color: 'Color',
						passenger_capacity: 'Passenger Capacity',
						size: 'Size',
						no_of_captain: 'Number of Captain',
						crew_members: 'Number of Crew',

						facilities_en: 'Facilities in English',
						facilities_ar: 'Facilities in Arabic',
						what_is_included_en: 'What is included in English',
						what_is_included_ar: 'What is included in Arabic',
						what_expect_description_en: 'What expect description in English',
						what_expect_description_ar: 'What expect description in Arabic',

						corporate_company: 'Corporate company',
						corporate_price: 'corporate price',
						selling_per_hour: 'selling per hour ',
						yacht_special_price: 'yacht special price',
						minimum_hours_booking: 'minimum hours booking',
						status: 'Status',
					},

					/* Technical Information*/
					technical_information: {
						manufacturer: 'Manufacturer',
						fuel_type: 'fuel type',
						hull_type: 'hull type',
						engine_type: 'engine type',
						horse_power: 'horse Power\n',
						max_speed: 'max speed',
						cruising_speed: 'cruising speed',
						length: 'length',
						beam: 'Beam',
					},

					/* Key Feature*/
					key_features: {
						water_slider: 'water slider',
						safety_equipment: 'safety equipment',
						soft_drinks_refreshments: 'soft drinks refreshments',
						swimming_equipment: 'swimming equipment',
						ice_tea_water: 'ice tea water',
						DVD_player: 'DVD player',
						satellite_system: 'satellite system',
						red_carpet_on_arrival: 'red carpet on arrival',
						spacious_saloon: 'spacious saloon',
						BBQ_grill_equipment: 'BBQ grill equipment',
						fresh_towels: 'fresh towels',
						yacht_slippers: 'yacht slippers',
						bathroom_amenities: 'bathroom amenities',
						under_water_light: 'underwater light',
						LED_screen_tv: 'LED screen tv',
						sunbathing_on_the_foredeck: 'sunbathing on the foredeck',
						fishing_equipment: 'fishing equipment',
					},
				}
			},

			YACHTS_RESERVATION: {
				name: 'Yachts Reservations',
				single: 'Yacht Reservation',
				customer_information: 'Customer Information',
				trip_date_time: 'Trip Date/Time',
				trip_information: 'Trip Information',
				columns: {
					start_hour: 'Start hour',
					start_date: 'Start Date',
					end_hour: 'End hour',
					end_date: 'End date',
					status: 'status',
					payment_method: 'payment method',
					name: 'name',
					title: 'title',
					phone: 'phone',
					email: 'email',
					address: 'address',
					country: 'country',
					yacht: 'yacht',
					number_of_people: 'number of people',
					rate_per_hour: 'rate per hour',
					other_charges: 'other charges',
					discount: 'discount',
					minimum_Advance_Payment: 'minimum advance payment',
					client_notes: 'client notes',
					admin_notes: 'admin notes',
					mr: 'Mr',
					mrs: 'Mrs',
					coupon_code: 'coupon code',
					booking_number: 'booking number',
					trip_duration: 'trip duration',
					total_price: 'Total Price',
				},
			},

			WATER_SPORTS: {
				name: 'Water Sports',
				single: 'Water Sport',
				basic_information: 'Basic Information',
				descriptions: 'Descriptions',
				columns: {
					/* Basic Information*/
					basic_information: {
						code: 'Code',
						color: 'Color',
						size: 'Size',

						description_en: 'Description in English',
						description_ar: 'Description in Arabic',
						routes_en: 'Routes in English',
						routes_ar: 'Routes in Arabic',
						what_expect_description_en: 'What expect description in English',
						what_expect_description_ar: 'What expect description in Arabic',
						location_en: 'Location in English',
						location_ar: 'Location in Arabic',


						corporate_company: 'Corporate company',
						corporate_price: 'corporate price',
						selling_per_hour: 'selling per hour ',
						special_price: 'special price',
						minimum_hours_booking: 'minimum hours booking',
						status: 'Status',
					},
				}
			},

			WATER_SPORTS_RESERVATION: {
				name: 'Water Sports Reservations',
				single: 'Water Sport Reservation',
				trip_date_time: 'Trip Date/Time',
				customer_information: 'Customer Information',
				trip_information: 'Trip Information',
				columns: {
					start_hour: 'Start hour',
					start_date: 'Start Date',
					end_hour: 'End hour',
					end_date: 'End date',
					status: 'status',
					payment_method: 'payment method',
					name: 'name',
					title: 'title',
					phone: 'phone',
					email: 'email',
					address: 'address',
					country: 'country',
					yacht: 'yacht',
					number_of_people: 'number of people',
					rate_per_hour: 'rate per hour',
					other_charges: 'other charges',
					discount: 'discount',
					minimum_Advance_Payment: 'minimum advance payment',
					client_notes: 'client notes',
					admin_notes: 'admin notes',
					mr: 'Mr',
					mrs: 'Mrs',
					coupon_code: 'coupon code',
					booking_number: 'booking number',
					trip_duration: 'trip duration',
					total_price: 'Total Price',
				},
			},

			Gallery: {
				name: 'Gallery',
				single: 'Image',
				images: 'Images',
				columns: {},
				view_image: 'View Image',
				change_image: 'Add / change Images',
				upload: 'Upload',
				no_images: 'No Gallery Image yet',
				no_attached_images: 'No Images attached yet',
				selected_images: 'Selected Images',
				no_selected_images: 'No Selected Images',
				gallery_images: 'Galley Images',
				remove: 'Remove',
				save_selected_images: 'Save Selected Image',
				guide_msg: 'Note :: you should select {{image}} then Click on {{save_selected_images}}',
				delete_image: 'Delete Image',
				delete_image_body: 'Are you sure ? this Image will be deleted Permanently!',
				open_gallery: 'Open Gallery'
			},

		},

		BASIC: {
			APP_NAME: 'Boats Ride',
			ADMIN_PANEL: 'Admin Panel',
		},

		COMMON: {
			id: 'ID',
			in_active: 'Inactive',
			active: 'active',
			activation: 'Activation',

			activation_button: 'Active',
			deactivation_button: 'Inactive',
			accepted: 'Accepted',
			rejected: 'Rejected',

			email: 'Email',
			password: 'Password',
			remember_me: 'Remember me',
			password_confirmation: 'Password Confirmation',
			forget_password: 'Forget Password ?',
			reset_password: 'Reset Your Password',
			token: 'Token',
			content: 'Content',
			name: 'Name',

			name_ar: 'Name in Arabic',
			name_en: 'Name in English',

			description_ar: 'Description in Arabic',
			description_en: 'Description in English',

			title_ar: 'Title in Arabic',
			title_en: 'Title in English',

			seo_title_ar: 'SEO Title in Arabic',
			seo_title_en: 'SEO Title in English',

			seo_description_ar: 'SEO Description in Arabic',
			seo_description_en: 'SEO Description in English',

			seo_meta_tags_ar: 'SEO Meta Tags in Arabic',
			seo_meta_tags_en: 'SEO Meta Tags in English',

			title: 'Title',
			images: 'Images',
			image: 'Image',
			phone: 'Phone',
			address: 'Address',
			visitors: 'Visitors',
			visit_number: 'Visits',
			clear_form: 'Clear Form',
			no_record_found: 'No Record Found',
			Add_Button: 'Add {{name}}',
			Edit_Button: 'Edit {{name}}',
			Delete_Title: 'Delete {{name}}',
			Delete_Button: 'Delete',
			Delete_Body: 'Are your sure to delete {{name}} that have id {{id}} ?, This will delete permanently!',
			Added_successfully: '{{name}} added Successfully',
			Edited_successfully: '{{name}} edited Successfully',
			Deleted_successfully: '{{name}} deleted Successfully',
			Details: '{{name}} details',
			Item_not_found: '{{name}} is Not Found or not exists anymore',
			status_changed: 'Status changed successfully',
			old_password: 'Old Password',
			new_password: 'New Password',
			min: 'min',
			hrs: 'hrs',
			AED: 'aed',
			past: 'Past',
			booked: 'Booked',
			available: 'Available',
			errors: 'Errors',
		},

		MSG: {},

		stepper: {
			next: 'Next',
			back: 'Back',
			error: 'Please Enter the Required Data'

		},


	}
};
