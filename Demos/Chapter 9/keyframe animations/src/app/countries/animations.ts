import { trigger, state, style, transition, animate, keyframes } from '@angular/core';


export function bobble() {
    return trigger('bobble', [
        transition(':enter', [
            animate(1000, keyframes([
                style({ transform: 'translateY(-1000%)', offset: 0 }),
                style({ transform: 'translateY(0)', offset: 0.4 }),
                style({ transform: 'translateY(400%)', offset: 0.5 }),
                style({ transform: 'translateY(0)', offset: 0.6 }),
                style({ transform: 'translateY(100%)', offset: 0.7 }),
                style({ transform: 'translateY(0)', offset: 0.8 }),
                style({ transform: 'translateY(50%)', offset: 0.9 }),
                style({ transform: 'translateY(0)', offset: 1.0 })
            ]))
        ])
    ])
}