const card = document.querySelector('.card')

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


card.addEventListener('mouseover', evt => {
    gsap.to(card, {
        scale: 1.1,
        duration: 0.1,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    })

})

card.addEventListener('mousemove', evt => {
    const x = evt.clientX
    const y = evt.clientY
    const offX = evt.offsetX / 2
    const offY = evt.offsetY / 2


    const normalized = map(x, 0, window.innerWidth, -offY, offY)


    const normalizedY = map(y, 0, window.innerHeight, offX, -offX)



    gsap.to(card, {
        rotateY: normalized + "deg",
        rotateX: normalizedY + "deg"
    })
})


card.addEventListener('mouseleave', evt => {
    gsap.to(card, {
        scale: 1,
        duration: '0.6',
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        transform: "none",
        rotateY: "0deg",
        rotateX: "0deg"
    })
})

