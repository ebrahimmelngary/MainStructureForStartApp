import { I18nManager } from 'react-native';
import Language from '../../../language';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';
import { KEYS } from '../../../common'
import { CHANGE_LANGUAGE, APPLY_LANGUAGE } from '../actionTypes';


export const changeLanguage = (lang) => {
    return async (dispatch) => {
        if (lang == 'ar') {
            Language = 'ar';
            dispatch({ type: CHANGE_LANGUAGE, payload: { lang: 'ar', rtl: true } })
        }
        else {
            Language = 'en';
            dispatch({ type: CHANGE_LANGUAGE, payload: { lang: 'en', rtl: false } })
        }
    }
}

export const applyLanguage = (lang) => {
    return async (dispatch) => {
        await I18nManager.forceRTL(lang == 'ar');
        dispatch({ type: APPLY_LANGUAGE, rtl: lang == 'ar' ? true : false })
        await AsyncStorage.setItem(KEYS.LangKey, lang).then(() => RNRestart.Restart());
    }
}










export const applyLanguage = (lang) => {
    return async (dispatch) => {
        await I18nManager.forceRTL(lang == 'ar');
        dispatch({ type: APPLY_LANGUAGE, lang, rtl: lang == 'ar' ? true : false })
        await AsyncStorage.setItem(KEYS.LangKey, lang).then(() => RNRestart.Restart());
    }
}