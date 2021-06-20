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
			link: 'افتح قائمه {{title}}'

		},

		MENUS: {
			USERS: {
				TITLE: 'المستخدمين',
				MENU: {
					ADMINS: 'مديرين الموقع',
					ROLES: 'الادوار',
				},
			},
			MARKETING: {
				TITLE: 'التسويق',
				MENU: {
					BANNERS: 'اللافتات',
					SERVICES: 'الخدمات',
					OFFERS: 'العروض',
					SEO: 'محرك البحث',
				}
			},
			YACHT_SETTINGS: {
				TITLE: 'ادارة اليخوت',
				MENU: {
					YACHTS: 'اليخوت',
					YACHTS_RESERVATION: 'حجوزات اليخوت',
				}
			},
			WATER_SPORT_SETTINGS: {
				TITLE: 'ادارة العاب المياه',
				MENU: {
					WATER_SPORTS: 'ألعاب المياه',
					WATER_SPORTS_RESERVATION: 'حجوزات العاب المياه',
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
			Accept: 'قبول',
			Reject: 'رفض',
			Pending: 'معلق',
			price: 'السعر',
			image: 'الصورة',
			apply_vat: 'تطبيق ضريبة القيمة المضافة',
			images: 'الصور',
			yes: 'نعم',
			no: 'لا',

			SERVICES: {
				name: 'الخدمات',
				single: 'الخدمة',
				columns: {
					price_model: 'نموذج السعر',
					minimum_hours_booking: 'الحد الأدنى من ساعات الحجز',
					max_quantity: 'الكمية القصوى',
				}
			},

			OFFERS: {
				name: 'العروض',
				single: 'عرض',
				columns: {
					valid_date: 'صالح حتى',
				}
			},

			SEO: {
				name: 'تحسينات محرك البحث',
				single: 'تحسين',
				columns: {
					url: 'رابط',
					keywords_ar: 'الكلمات الدلالية باللغة العربية',
					keywords_en: 'الكلمات الدلالية باللغة الانجليزية',
				}
			},

			BANNERS: {
				name: 'اللافتات',
				single: 'اللافتة',
				columns: {
					type: 'النوع',
					link: 'الرابط',
					image: 'صوره',
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
				columns: {}
			},

			YACHTS: {
				name: 'اليخوت',
				single: 'يخت',
				basic_information: 'المعلومات الاساسية',
				technical_information: 'المعلومات الفنية',
				descriptions: 'الأوصاف',
				key_features: 'السمات الرئيسية',
				columns: {
					/* Basic Information*/
					basic_information: {
						type: 'النوع',
						code: 'الكود',
						color: 'اللون',
						passenger_capacity: 'سعة الركاب',
						size: 'الحجم',
						no_of_captain: 'عدد الكباتن',
						crew_members: 'عدد اعضاء الطاقم',

						facilities_en: 'المرافق باللغة الانجليزية',
						facilities_ar: 'المرافق باللغة العربية',
						what_is_included_en: 'المحتويات باللغة الانجليزية',
						what_is_included_ar: 'المحتويات باللغة العربية',
						what_expect_description_en: 'وصف المتوقع باللغة الانجليزية',
						what_expect_description_ar: 'وصف المتوقع باللغة العربية',

						corporate_company: 'الشركات الخاصة',
						corporate_price: 'سعر الشركة',
						selling_per_hour: 'بيع في الساعة',
						yacht_special_price: 'اليخت بسعر خاص',
						minimum_hours_booking: 'الحد الأدنى من ساعات الحجز',
						status: 'الحالة',
					},

					/* Technical Information*/
					technical_information: {
						manufacturer: 'الصانع',
						fuel_type: 'نوع الوقود',
						hull_type: 'نوع بدن',
						engine_type: 'نوع المحرك',
						horse_power: 'قوة الحصام',
						max_speed: 'السرعة القصوى',
						cruising_speed: 'سرعة الانطلاق',
						length: 'الطول',
						beam: 'الكمرة',
					},

					/* Key Feature*/
					key_features: {
						water_slider: 'زلاجة مياه',
						safety_equipment: 'معدات السلامة',
						soft_drinks_refreshments: 'مرطبات المشروبات الغازية',
						swimming_equipment: 'معدات السباحة',
						ice_tea_water: 'ماء الشاي المثلج',
						DVD_player: 'مشغل اسطوانات',
						satellite_system: 'نظام الأقمار الصناعية',
						red_carpet_on_arrival: 'السجادة الحمراء عند الوصول',
						spacious_saloon: 'صالون واسع',
						BBQ_grill_equipment: 'معدات الشواء',
						fresh_towels: 'مناشف جديدة',
						yacht_slippers: 'النعال اليخوت',
						bathroom_amenities: 'مرافق الحمام',
						under_water_light: 'تحت ضوء الماء',
						LED_screen_tv: 'تلفزيون بشاشة LED',
						sunbathing_on_the_foredeck: 'حمامات الشمس على مقدمة السفينة',
						fishing_equipment: 'معدات الصيد',
					},


				}
			},

			WATER_SPORTS: {
				name: 'العاب المياه',
				single: 'لعبة مياه',
				basic_information: 'المعلومات الاساسية',
				descriptions: 'الأوصاف',
				columns: {
					/* Basic Information*/
					basic_information: {
						code: 'الكود',
						color: 'اللون',
						size: 'الحجم',

						description_en: 'الوصف باللغة الانجليزية',
						description_ar: 'الوصف باللغة العربية',
						routes_en: 'الطرق باللغة الانجليزية',
						routes_ar: 'الطرق باللغة العربية',
						what_expect_description_en: 'وصف المتوقع باللغة الانجليزية',
						what_expect_description_ar: 'وصف المتوقع باللغة العربية',
						location_en: 'الموقع باللغة الانجليزية',
						location_ar: 'الموقع باللغة العربية',

						corporate_company: 'الشركات الخاصة',
						corporate_price: 'سعر الشركة',
						selling_per_hour: 'بيع في الساعة',
						special_price: 'اليخت بسعر خاص',
						minimum_hours_booking: 'الحد الأدنى من ساعات الحجز',
						status: 'الحالة',
					},
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
			APP_NAME: 'Boats Ride',
			ADMIN_PANEL: 'لوحة التحكم',
		},

		COMMON: {
			id: 'الرقم التعريفي',
			in_active: 'غير مفعل',
			active: 'مفعل',
			activation: 'التفعيل',

			activation_button: 'تفعيل',
			deactivation_button: 'تعطيل',
			accepted: 'مقبول',
			rejected: 'مرفوض',

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

