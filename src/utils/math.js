export function lerp (p1, p2, t) {
    return p1 + (p2 - p1) * t
}

export function generateImpulseX(){
    let random = Math.random()
    let impulse = random >= .5 ?  30 :  (-30)
    return impulse
}

export function generateImpulseY(){
    let random = Math.random()
    let impulse = random >= .5 ?  20 :  (-30)
    return impulse
}