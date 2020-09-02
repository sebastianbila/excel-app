import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'


    constructor($root, options) {
        super($root, {
            name: 'Header',
            ...options
        });
    }

    toHTML() {
        return `
            <input type="text" class="excel__header__input" value="New table">
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
}
