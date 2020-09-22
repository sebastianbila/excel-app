import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.storeSubs = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []

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
        this.unsubscribers.push(subs)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    storeChanged() {

    }

    isWatching(key) {
        return this.storeSubs.includes(key)
    }

    // Component initialization. Adding DOM listeners
    init() {
        this.initDOMListeners()
    }

    // Destroying components and clear listeners
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(e => e())
    }
}
