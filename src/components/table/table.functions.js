import {range} from '@core/utils';

export function shouldResize(event) {
    return event.target.dataset.resize
}

export function isCell(event) {
    return event.target.dataset.type
}

export function matrix(current, target) {
    const currentCell = current.id(true)
    const targetCell = target.id(true)

    const columns = range(currentCell.column, targetCell.column)
    const rows = range(currentCell.row, targetCell.row)

    return columns.reduce((acc, column) => {
        rows.forEach(row => acc.push(`${row}:${column}`))
        return acc
    }, [])
}

export function nextSelector(key, {row, column}) {
    const MIN_VALUE = 0
    // const MAX_VALUE = 20 - 1
    switch (key) {
        case 'Enter':
        case 'ArrowDown':
            row++
            // row = row + 1 > MAX_VALUE ? MAX_VALUE : row + 1
            break
        case 'Tab':
        case 'ArrowRight':
            column++
            break
        case 'ArrowUp':
            row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
            break
        case 'ArrowLeft':
            column = column - 1 < MIN_VALUE ? MIN_VALUE : column - 1
            break
    }

    return `[data-id="${row}:${column}"]`
}
