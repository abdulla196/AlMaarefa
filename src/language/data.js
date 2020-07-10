import LocalizedStrings from 'react-localization';
let strings = new LocalizedStrings({
    en:{
      Name:"Name",
      Status:"Status",
      Major:"Major", 
      admission: 'admission male',
      Applicants: 'Applicants',
      Dates: 'Dates',
      signout: 'Sign Out',
    },
    Ar: {
        Name:"الاسم",
        Status:"الحالة",
        Major:"تخصص", 
        admission: 'قبول ذكر',
        Applicants: 'المتقدمين',
        Dates: 'التواريخ',
        signout: 'تسجيل الخروج',
    }
   });
   export {strings};