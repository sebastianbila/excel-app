import {storage} from '@core/utils';

function toHtml(key) {
    const model = storage(key)
    const id = key.split(':')[1]
     return `
        <li class="content__record">
            <a href="#excel/${id}">${model.title}</a>
            <strong>
                ${new Date(model.openedDate).toLocaleDateString()}
                ${new Date(model.openedDate).toLocaleTimeString()}
            </strong>
        </li>
    `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('excel')) continue
        keys.push(key)
    }
    return keys
}


export function createRecordsTable() {
    const keys = getAllKeys()

    if (!keys.length) return `<p>You have not created any records</p>`

    return `
        <div class="dashboard__table-header">
            <span>Name</span>
            <span>Last opened</span>
        </div>
        <ul class="dashboard__table-content content">
            ${keys.map(toHtml).join('')}
        </ul>
    `
}
