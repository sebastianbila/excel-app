import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/DOM';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@/const';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click'],
            ...options
        });
    }

    toHTML() {
        const title = this.store.getState().title || defaultTitle
        return `
            <input type="text" class="excel__header__input" value="${title}">
            <div>
                <div class="excel__header__button" data-button="exit">
                    <span 
                    class="material-icons" 
                    data-button="exit">
                        exit_to_app
                    </span>
                </div>
                <div class="excel__header__button" data-button="remove">
                    <span 
                    class="material-icons" 
                    data-button="remove">
                        delete
                    </span>
                </div>
            </div>
        `
    }

    onInput(event) {
        const target = $(event.target)
        this.$dispatch(changeTitle(target.text()))
    }

    onClick(event) {
        const target = $(event.target)
        if (target.data.button === 'remove') {
            const decision = confirm('Are you sure you want to delete this table?')

            if (decision) localStorage.removeItem('excel:' + ActiveRoute.param)
            ActiveRoute.navigate('')
        } else if (target.data.button === 'exit') {
            ActiveRoute.navigate('')
        }
    }
}
