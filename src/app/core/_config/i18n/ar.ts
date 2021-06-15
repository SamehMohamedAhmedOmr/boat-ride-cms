// Germany
export const locale = {
	lang: 'ar',
	data: {

		MENU: {
			NEW: 'القائمة',
			SHORT_ACCESS: 'الاختصارات السريعه',
			ADD_NEW: 'اضافة جديد',
			APPS: 'Apps',
			DASHBOARD: 'لوحة التحكم',
			STAND: 'الأساسيات',
			LOGOUT: 'تسجيل الخروج',
			ANALS: 'تحاليل البيانات',
			LANG: {
				AR: 'عربى',
				EN: 'انجليزى',
			},
			DATA_TABLE: 'جدول البيانات',
		},

		VALIDATION: {
			INVALID: '{{name}} غير صحيح',
			REQUIRED: '{{name}} مطلوب',
			REQUIRED_F: '{{name}} مطلوبة',
			MIN_LENGTH: '{{name}} الحد الادني لعدد الحروف هو {{min}}',
			AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
			NOT_FOUND: '{{name}} غير موجود لدينا',
			INVALID_LOGIN: 'The login detail is incorrect',
			REQUIRED_FIELD: 'مطلوب',
			MIN_LENGTH_FIELD: 'اقل عدد من الحروف هو:',
			MAX_LENGTH_FIELD: 'أكبر عدد من الحروف هو:',
			INVALID_FIELD: '{{name}} غير صحيح',
		},

		STATISTICS: {
			name: 'الاحصائيات',
			visitors_count: '',
			link  : 'افتح قائمه {{title}}'

		},

		MENUS: {
			USERS: {
				TITLE: 'المستخدمين',
				MENU: {
					ADMINS: 'مديرين الموقع',
					DOCTORS: 'الأطباء',
					PATIENTS: 'المرضى',
				},
			},
			SETTINGS: {
				TITLE: 'الاعدادات',
				MENU: {
					DISTRICTS: 'المناطق',
					ROLES: 'الادوار',
				}
			},
			MARKETING: {
				TITLE: 'التسويق',
				MENU: {
					BANNERS: 'اللافتات',
					COLLECTIONS: 'المجموعات',
				}
			},
			DOCTORS_SETTINGS: {
				TITLE: 'الأطباء',
				MENU: {
					PACKAGES: 'الحزم',
					SERVICES: 'الخدمات',
					SPECIALITIES: 'التخصصات',
					APPOINTMENTS: 'الحجوزات',
					OPERATIONS: 'العمليات',
				}
			},
		},


		AUTH: {
			GENERAL: {
				OR: 'Oder',
				SUBMIT_BUTTON: 'einreichen',
				NO_ACCOUNT: 'Hast du kein Konto?',
				SIGNUP_BUTTON: 'Anmelden',
				FORGOT_BUTTON: 'Passwort vergessen',
				BACK_BUTTON: 'Zurück',
				PRIVACY: 'Privatsphäre',
				LEGAL: 'Legal',
				CONTACT: 'Kontakt',
			},
			LOGIN: {
				TITLE: 'Create Account',
				BUTTON: 'تسجيل الدخول',
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
				EMAIL: 'البريد الالكتروني',
				FULLNAME: 'Fullname',
				PASSWORD: 'كلمة المرور',
				CONFIRM_PASSWORD: 'Confirm Password',
				USERNAME: 'Nutzername'
			},
		},


		Components: {
			item_per_page: 'عدد العناصر في كل صفحة',
			filter_by: 'تصفية بواسطة',
			actions: 'الاجراءات',
			all: 'الكل',
			marked: 'المختار',
			active: 'مفعل',
			is_active: 'غير مفعل',
			items: 'عنصر',
			id: 'الرقم المسلسل',
			options: 'الاعدادات',
			Edit: 'تعديل',
			Details: 'التفاصيل',
			Delete: 'حذف',
			Close: 'اغلاق',
			Search: 'بحث',
			ItemNotFound: 'لا يوجد نتائج',
			Images: 'الصور',
			STOCK: 'المخازن',
			status: 'الحالة',
			date: 'التاريخ',
			Select: 'اختار',
			export: 'تصدير',
			no_image: 'لا يوجد صوره',
			Accept : "قبول" ,
			Reject : "رفض",
			Pending : "معلق",
			PACKAGES: {
				name: 'الحزم',
				single: 'الحزمة',
				columns: {
					price: 'السعر',
					description_ar: 'الوصف باللغة العربية',
					description_en: 'الوصف باللغة الانجليزية',
					duration: 'المدة باليوم',
				}
			},

			APPOINTMENTS: {
				name: 'الحجوزات',
				single: 'الحجز',
				columns: {
					date: 'التاريخ',
					time: 'الميعاد',
					patient: 'المريض',
					doctor: 'الطبيب',
					payment_method: 'طريقة الدفع',
					service: 'الخدمة',
				}
			},

			OPERATIONS: {
				name: 'العمليات',
				single: 'العملية',
				columns: {
					creation_date: 'وقت الانشاء',
					national_id: 'الرقم القومي',
					number_of_months: 'عدد الشهور',
					operation_cost: 'تكلفة العملية',
					wallet_cost: 'تكلفة المحفظة',
					doctor_status: 'حالة الدكتور',
					patient: 'المريض',
					doctor: 'الطبيب',

					calculation:{
						actual_finance_portion_with_mu_qr: 'جزء التمويل الفعلي',
						down_payment: 'الدفعة الأولى',
						souhoola_admin_fees: 'الرسوم الإدارية لـ souhoola',
						total_transaction_amount: 'إجمالي مبلغ الصفقة',
						monthly_installment : 'القسط الشهري',
					},
				}
			},

			SERVICES: {
				name: 'الخدمات',
				single: 'الخدمة',
				columns: {
				}
			},

			SPECIALITIES: {
				name: 'التخصصات',
				single: 'التخصص',
				columns: {
				}
			},

			DISTRICTS: {
				name: 'المناطق',
				single: 'المنطقة',
				columns: {
					parent: 'الحي',
				}
			},

			BANNERS: {
				name: 'اللافتات',
				single: 'اللافتة',
				columns: {
					type: 'النوع',
					link: 'الرابط',
					image : 'صوره' ,
				}
			},

			COLLECTIONS: {
				name: 'المجموعات',
				single: 'المجموعة',
				columns: {
					type: 'النوع',
				}
			},

			ROLES: {
				name: 'الأدوار',
				single: 'الدور',
				columns: {
					permissions: 'الصلاحيات',
					select_all: 'اختر الكل',
					selected_permission: 'عدد الصلاحيات المختارة',
				}
			},

			CMS_USERS: {
				name: 'مستخدمين لوحة التحكم',
				single: 'مستخدم لوحة التحكم',
				columns: {
				}
			},

			PATIENTS: {
				name: 'المرضى',
				single: 'المريض',
				columns: {
				}
			},

			DOCTORS: {
				name: 'الأطباء',
				single: 'الطبيب',
				columns: {
					date_of_birth: 'تاريخ الميلاد',
					title: 'اللقب',
					package_expiration_date: 'تاريخ انتهاء الحزمة',
					locations: 'المواقع',
					bio: 'السيرة الذاتية',
					location : 'الموقع',
					district: 'المنطقة',
					no_locations: 'لا يوجد مناطق متوفرة',
					certificate:'الشهادة',
					card_image: 'صورة الكارنية',
					bank_name: 'اسم البنك',
					bank_account_number: 'رقم حساب البنك',
				}
			},



			Gallery: {
				name: 'المعرض',
				single: 'الصورة',
				images: 'صور',
				columns: {},
				view_image: 'عرض الصورة',
				change_image: 'اضافة / تغيير الصورة',
				upload: 'رفع',
				no_images: 'لا يوجد صورة ف المعرض حتى الان',
				no_attached_images: 'لم يتم اضافة صور',
				selected_images: 'الصور المختارة',
				no_selected_images: 'لم يتم اختيار صور',
				gallery_images: 'صور المعرض',
				remove: 'الغاء',
				save_selected_images: 'حفظ الصور المختاره',
				guide_msg: 'ملاحظة :: يجب ان تختار {{image}} ثم تضغط هلى {{save_selected_images}}',
				delete_image: 'حذف الصورة',
				delete_image_body: 'هل انت متأكد ؟ سيتم حذف الصورة نهائيا!',
				open_gallery: 'فتح المعرض'
			},

		},

		BASIC: {
			APP_NAME: 'BeIN Health',
			ADMIN_PANEL: 'لوحة التحكم',
		},

		COMMON: {
			id: 'الرقم التعريفي',
			in_active: 'غير مفعل',
			active: 'مفعل',
			activation: 'التفعيل',

			activation_button: 'تفعيل',
			deactivation_button: 'تعطيل',
			accepted : 'مقبول',
			rejected : 'مرفوض',

			email: 'البريد الالكتروني',
			password: 'كلمة المرور',
			remember_me: 'تذكرني',
			password_confirmation: 'تأكيد كلمة المرور',
			forget_password: 'هل نسيت كلمة المرور ؟',
			reset_password: 'اعادة تعيين كلمة المرور',
			token: 'الرمز',
			content: 'المحتوى',
			name: 'الاسم',
			name_ar: 'الاسم باللغة العربية',
			name_en: 'الاسم بالغة الانجليزية',
			description_ar: 'الوصف باللغة العربية',
			description_en: 'الوصف بالغة الانجليزية',
			title: 'العنوان',
			images: 'الصور',
			image: 'الصورة',
			phone: 'الهاتف',
			address: 'العنوان',
			visitors: 'الزوار',
			no_record_found: 'لا يوجد بيانات',
			visit_number: 'عدد الزيارات',
			clear_form: 'اعادة تعيين الصفحة',
			Add_Button: 'اضافة {{name}}',
			Edit_Button: 'تعديل {{name}}',
			Delete_Title: 'حذف {{name}}',
			Delete_Button: 'حذف',
			Delete_Body: 'هل انت متأكد من حذف {{name}} ذو الرقم التعريفي {{id}} ؟ ، سيتم حذفه نهائيًا!',
			Added_successfully: '{{name}} تم اضافته بنجاح',
			Edited_successfully: '{{name}} تم تعديله بنجاح',
			Deleted_successfully: '{{name}} تم حذفه بنجاح',
			Details: '{{name}} تفاصيل',
			Item_not_found: '{{name}} غير موجود او تم حذفه',
			status_changed: 'تم تغيير التفعيل بنجاح',
			old_password: 'كلمة المرور الحالية',
			new_password: 'كلمة المرور الجديدة',
		},

		MSG: {},

		stepper: {
			next: 'التالي',
			back: 'رجوع',
			error: 'من فضلك ادخل البيانات المطلوبة'
		},


	}
};

