import {Page} from '@core/Page';
import {$} from '@core/DOM';
import {createRecordsTable} from './dashboard.functions';

export class DashboardPage extends Page {
    getRoot() {
        const id = Date.now().toString()
        return $.create('div', 'dashboard').html(`
            <div class="dashboard__header">Excel Dashboard</div>
            <div class="dashboard__new">
                <div class="dashboard__view">
                    <a href="#excel/${id}" class="dashboard__new-create">
                        Create <br> new table
                    </a>
                </div>
            </div>
            <div class="dashboard__table dashboard__view">
                ${createRecordsTable()}
            </div>
        `)
    }
}
