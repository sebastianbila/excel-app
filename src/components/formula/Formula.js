import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
    }

    toHTML() {
        return `
            <div class="excel__formula__info">fx</div>
            <div class="excel__formula__input" contenteditable="true" spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(event)
    }

    onClick() {

    }
}
