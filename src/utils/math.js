export function lerp (p1, p2, t) {
    return p1 + (p2 - p1) * t
}

export function generateImpulseX(){
    let random = Math.random()
    // let impulse = random >= .5 ?  6 :  (-6)
    let impulse = random >= .5 ?  20 :  (-1)
    return impulse
}

export function generateImpulseY(){
    let random = Math.random()
    // let impulse = random >= .5 ?  4 :  (-6)
    let impulse = random >= .5 ?  20 :  (-2.5)
    return impulse
}