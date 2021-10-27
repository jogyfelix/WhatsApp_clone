import {strings} from '../constants/strings';
const baseTheme = {
  colors: {
    background: '#18252D',
    tab_color: '#232D36',
    tab_active: '#0CA996',
    tab_inactive: '#9DA5AC',
    white: '#FAFFFF',
    screen_bg: '#18252D',
  },
  iconNames: {
    camera: 'ri-camera-fill',
    search: 'ri-search-line',
    menu: 'ri-more-2-fill',

    eye: {
      open: 'eye-line',
      closed: 'eye-off-line',
    },
  },
};

export const theme = {
  ...baseTheme,
  strings: {...strings},
};
