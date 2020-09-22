import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '@/const';

const defaultState = {
    title: defaultTitle,
    rowState: {},
    columnState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles
}

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
})

export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState
