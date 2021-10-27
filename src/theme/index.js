import {strings} from '../constants/strings';
const baseTheme = {
  colors: {
    background: '#18252D',
    tab_color: '#232D36',
    tab_active: '#0CA996',
    tab_inactive: '#9DA5AC',
    white: '#FAFFFF',
    screen_bg: '#18252D',
    dark_btn_bg: '#313C42',
    primary_text: '#D3DAE0',
    secondary_text: '#889397',
    app_primary: '#04A595',
    dark_text: '#232D36',
    faded_white: '#BBC4C9',
  },
  iconNames: {
    camera: 'ri-camera-fill',
    search: 'ri-search-line',
    menu: 'ri-more-2-fill',
    message: 'ri-message-fill',
    pencil: 'ri-pencil-fill',
    phone: 'ri-phone-fill',
    arrow_down: 'ri-arrow-right-down-line',
    back: 'ri-arrow-left-line',
    video: 'ri-vidicon-fill',
    mic: 'ri-mic-fill',
    smiley: 'ri-user-smile-fill',
    clip: 'ri-attachment-2',
  },
};

export const theme = {
  ...baseTheme,
  strings: {...strings},
};
