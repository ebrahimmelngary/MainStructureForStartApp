import I18n from '../../i18n';
import {CHANGE_LANGUAGE,APPLY_LANGUAGE} from '../actions/actionTypes';



// get the Default Device Language
const deviceLang = I18n.currentLocale().substr(0, 2);


// set initial state
const INITIALSTATE = {
    lang : 'en' ,
    rtl :  false,
    selected: false
}


export default (state=INITIALSTATE, action)=>{
    switch(action.type){
        
        case CHANGE_LANGUAGE:
            return {...state, lang : action.payload.lang, rtl : action.payload.rtl};
        case APPLY_LANGUAGE:
            return{...state, selected:true, lang : action.lang, rtl:action.rtl};
        default :
            return state;
    }

}

