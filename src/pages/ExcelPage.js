import {Page} from '@core/Page';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {normalizeInitialState} from '@/redux/initialState';
import {storage, debounce} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

function storageName(param) {
    return 'excel:' + param
}

export class ExcelPage extends Page {
    getRoot() {
        if (!this.params) ActiveRoute.navigate('')
        const state = storage(storageName(this.params))
        const store = createStore(rootReducer, normalizeInitialState(state))

        const stateListener = debounce(state => {
            storage(storageName(this.params ), state)
        }, 300)

        store.subscribe(state => {
            stateListener(state)
        })

        this.excel = new Excel({
            components: [Header, Toolbar, Formula, Table],
            store
        })

        return this.excel.getRoot()
    }

    afterRender() {
       this.excel.init()
    }

    destroy() {
        this.excel.destroy()
    }
}
