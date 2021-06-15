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
			INVALID_FIELD: 'Field is not valid',
		},

		STATISTICS: {
			name: 'Statistics',
			visitors_count: '',
              link  : 'Open {{title}} List'


		},

		MENUS: {
			USERS: {
				TITLE: 'Users',
				MENU: {
					ADMINS: 'CMS Users',
					DOCTORS: 'Doctors',
					PATIENTS: 'Patients',
				},

			},
			SETTINGS: {
				TITLE: 'Settings',
				MENU: {
					DISTRICTS: 'Districts',
					ROLES: 'Roles',
				}
			},
			MARKETING: {
				TITLE: 'Marketing',
				MENU: {
					BANNERS: 'Banners',
					COLLECTIONS: 'Collections',
				}
			},
			DOCTORS_SETTINGS: {
				TITLE: 'Doctors',
				MENU: {
					PACKAGES: 'Packages',
					SERVICES: 'Services',
					SPECIALITIES: 'Specialises',
					APPOINTMENTS: 'Appointments',
					OPERATIONS: 'Operations',
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
            Accept : "Accept" ,
			Reject : "Reject",
			Pending : "Pending",
			PACKAGES: {
				name: 'Packages',
				single: 'Package',
				columns: {
					price: 'Price',
					description_ar: 'Description in Arabic',
					description_en: 'Description in English',
					duration: 'Duration in days',
				}
			},

			APPOINTMENTS: {
				name: 'Appointments',
				single: 'Appointment',
				columns: {
					date: 'date',
					time: 'time',
					patient: 'patient',
					doctor: 'doctor',
					payment_method: 'Payment Method',
					service: 'Service',
				}
			},

			OPERATIONS: {
				name: 'Operations',
				single: 'Operation',
				columns: {
					creation_date: 'Creation date',
					national_id: 'National Id',
					number_of_months: 'Number of months',
					operation_cost: 'Operation cost',
					wallet_cost: 'Wallet cost',
					doctor_status: 'Doctor status',
					patient: 'patient',
					doctor: 'doctor',

					calculation:{
						actual_finance_portion_with_mu_qr: 'Actual Finance Portion',
						down_payment: 'Down payment',
						souhoola_admin_fees: 'Souhoola Admin Fees',
						total_transaction_amount: 'Total Transaction Amount',
						monthly_installment : 'Monthly installment',
					},
				}
			},

			SERVICES: {
				name: 'Services',
				single: 'Service',
				columns: {
				}
			},

			SPECIALITIES: {
				name: 'Specialities',
				single: 'Speciality',
				columns: {
				}
			},

			DISTRICTS: {
				name: 'Districts',
				single: 'District',
				columns: {
					parent: 'City',
				}
			},

			BANNERS: {
				name: 'Banners',
				single: 'Banner',
				columns: {
					type: 'Type',
					link: 'Link',
					image : "Image",
				}
			},
			COLLECTIONS: {
				name: 'Collections',
				single: 'Collection',
				columns: {
					type: 'Type',
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
				columns: {
				}
			},

			PATIENTS: {
				name: 'Patients',
				single: 'Patient',
				columns: {
				}
			},

			DOCTORS: {
				name: 'Doctors',
				single: 'Doctor',
				columns: {
					date_of_birth: 'Date of Birth',
					title: 'Title',
					package_expiration_date: 'Package Expiration date',
					locations: 'locations',
					bio: 'Bio',
					location : 'Location',
					district: 'District',
					no_locations: 'No Locations available',
					certificate:'Certificate',
					card_image: 'Card image',
					bank_name: 'Bank Name',
					bank_account_number: 'Bank Account Number',
				}
			},


			Gallery: {
				name: 'Gallery',
				single: 'Image',
				images: 'Images',
				columns: {},
				view_image: 'View Image',
				change_image: 'Add / Change imageِِ',
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
			APP_NAME: 'BeIN Health',
			ADMIN_PANEL: 'Admin Panel',
		},

		COMMON: {
			id: 'ID',
			in_active: 'Inactive',
			active: 'active',
			activation: 'Activation',

			activation_button: 'Active',
			deactivation_button: 'Inactive',
			accepted : 'Accepted',
			rejected : 'Rejected',

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
		},

		MSG: {},

		stepper: {
			next: 'Next',
			back: 'Back',
			error: 'Please Enter the Required Data'

		},



	}
};
