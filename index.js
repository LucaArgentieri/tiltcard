const card = document.querySelector('.card')
const cards = document.querySelectorAll('.card')


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

class cardElement {
    constructor() {
        this.cards = cards
    }
    init() {
        this.cards.forEach(el => {

            //Over
            el.addEventListener('mouseover', evt => {
                gsap.to(el, {
                    scale: 1.1,
                    duration: 0.1,
                    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                })
            })

            //Move
            el.addEventListener('mousemove', evt => {
                var rect = evt.target.getBoundingClientRect();
                var x2 = evt.clientX - rect.left;
                var y2 = evt.clientY - rect.top;

                const normalized = map(x2, 0, rect.width, -10, 10)

                const normalizedY = map(y2, 0, rect.height, 10, -10)

                gsap.to(el, {
                    rotateY: normalized + "deg",
                    rotateX: normalizedY + "deg"
                })
            })

            //Leave
            el.addEventListener('mouseleave', evt => {
                gsap.to(el, {
                    scale: 1,
                    duration: '0.6',
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    transform: "none",
                    rotateY: "0deg",
                    rotateX: "0deg"
                })
            })
        })


    }
}

const singleCard = new cardElement()
singleCard.init()



