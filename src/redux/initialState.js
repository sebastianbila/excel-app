import {defaultStyles, defaultTitle} from '@/const';
import {clone} from '@core/utils';

const defaultState = {
    title: defaultTitle,
    rowState: {},
    columnState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles,
    openedDate: new Date().toJSON()
}

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
})

export function normalizeInitialState (state) {
    return state ? normalize(state) : clone(defaultState)
}
