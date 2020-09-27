import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Page {
    constructor(params) {
        this.params = params || ActiveRoute.navigate('')
    }

    getRoot() {
        throw new Error('Method getRoot should be implemented')
    }

    afterRender() {

    }

    destroy() {

    }
}
