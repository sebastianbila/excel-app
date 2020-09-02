import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribe = []

        this.prepare()
    }

    // Setup component before init
    prepare() {
    }

    // Return the template of html
    toHTML() {
        return ''
    }

    // Emit data to observe
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Subscribing to event of observe
    $on(event, fn) {
        const subs = this.emitter.subscribe(event, fn)
        this.unsubscribe.push(subs)
    }

    // Component initialization. Adding DOM listeners
    init() {
        this.initDOMListeners()
    }

    // Destroying components and clear listeners
    destroy() {
        this.removeDOMListeners()
        this.unsubscribe.forEach(e => e())
    }
}
