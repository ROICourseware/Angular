import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function routeChange() {
    return trigger('routeChange', [
        state('void', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            animate('0.1s ease-in-out', style({ opacity: '0' }))
        ])
    ]);
}


export function slideUp() {
  return trigger('slideUp', [
    transition(':enter', [
      animate(400, keyframes([
        style({transform: 'translateY(+200%)', offset: 0}),
        style({transform: 'translateY(10px)', offset: 0.6}),
        style({transform: 'translateY(0)', offset: 1.0})
      ]))
    ])
  ])
}