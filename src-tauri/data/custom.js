console.log(
    '%cbuild from PakePlus4： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

const hookClick = (e) => {
    e.preventDefault()
    const origin = e.target.closest('a')
    if (origin && origin.href) {
        location.href = origin.href
    }
}

document.addEventListener('click', hookClick, { capture: true })
