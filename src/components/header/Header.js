import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/DOM';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@/const';
import {debounce} from '@core/utils';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],
            ...options
        });
    }

    toHTML() {
        const title = this.store.getState().title || defaultTitle
        return `
            <input type="text" class="excel__header__input" value="${title}">
            <div>
                <div class="excel__header__button">
                    <span class="material-icons">exit_to_app</span>
                </div>
                <div class="excel__header__button">
                    <span class="material-icons">delete</span>
                </div>
            </div>
        `
    }

    onInput(event) {
        const target = $(event.target)
        this.$dispatch(changeTitle(target.text()))
    }
}
