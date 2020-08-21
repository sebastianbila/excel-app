import {$} from '@core/DOM';

export function resizeHandler($root, event) {
    const resizer = $(event.target)
    const resizerType = resizer.data.resize
    const parent = resizer.closest('[data-type="resizable"]')
    const coords = parent.getCoords()
    const sideProp = resizerType === 'column' ? 'bottom' : 'right'
    let value = 0

    resizer.css({
        opacity: 1,
        [sideProp]: '-5000px'
    })

    document.onmousemove = e => {
        if (resizerType === 'column') {
            const delta = e.pageX - coords.right
            value = coords.width + delta
            resizer.css({right: -delta + 'px'})
        } else if (resizerType === 'row') {
            const delta = e.pageY - coords.bottom
            value = (coords.height + delta)
            resizer.css({bottom: -delta + 'px'})
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        if (resizerType === 'column') {
            parent.css({width: value + 'px'})
            $root
                .findAll(`[data-column="${parent.data.column}"]`)
                .forEach(e => e.style.width = value + 'px')
        } else if (resizerType === 'row') {
            parent.css({height: value + 'px'})
        }

        resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0,
        })
    }
}
