import LocalizedStrings from 'react-native-localization';

let Language = new LocalizedStrings({

    // English Translation

    en: {
        help: 'Help',
        settings: 'Settings',
        wallet: 'Wallet',
        payment: 'Payment',
        profile: 'Profile',
        phoneNumber: "010987654321",
        phone: "Phone",
        email: "Email",
        emailCom: "email@email.com",
        password: "Password",
        passwordPlaceholder: "**********",
        firstName: 'First Name',
        lastName: 'Last Name',
    },


    // Arabic Translation

    ar: {
        help: 'مساعدة',
        settings: 'الاعدادت',
        wallet: 'المحفظه',
        payment: 'الدفع',
        profile: 'الصفحة الشخصية',
        phone: "الموبايل",
        phoneNumber: "010987654321",
        emailCom: "email@email.com",
        email: "البريد الاليكترونى",
        password: "الباسورد",
        passwordPlaceholder: "**********",
        firstName: 'الاسم الاول',
        lastName: 'الاسم الاخير',
        recharge: 'شحن الآن',
        chargeNote: "من فضلك اخدش الكارت برفق واكتب الرقم فى الخانه بالاسفل",
        yourCredit: "رصيدك الحالى",
        signOut: "تسجيل خروج"

    }
});
export default Language;