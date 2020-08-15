const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
        <div class="excel__table__row-data-cell" contenteditable></div>
    `
}

function toColumn(column) {
    return `
        <div class="excel__table__row-data-column">${column}</div>    
    `
}

function createRow(index, content) {
    return `
         <div class="excel__table__row">
            <div class="excel__table__row-info">${index ? index : ''}</div> 
            <div class="excel__table__row-data">${content}</div> 
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15,) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(null, cols))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}

