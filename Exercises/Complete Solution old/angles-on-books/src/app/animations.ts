import { trigger, style, transition, animate, keyframes, query, group, animateChild, } from '@angular/animations';

export const slideUp = trigger('slideUp', [
    transition(':enter', [
      animate(800, keyframes([
      style({ transform: 'translateY(+200%)', offset: 0 }),
      style({ transform: 'translateY(10px)', offset: 0.6 }),
      style({ transform: 'translateY(0)', offset: 1.0 })
       ]))
     ])
   ]);



export const routeChange = trigger('routeAnimations',
   [transition('* => *', [
     style({ position: 'relative' }),
     query(':enter, :leave', [
      style({
       position: 'absolute', top: 0,
       left: 0, width: '100%'
      })
     ], { optional: true }),
     query(':enter', [
      style({ left: '-100%' })
     ], { optional: true }),
     query(':leave', animateChild(), { optional: true }),
     group([
      query(':leave', [
       animate('500ms ease-in', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
       animate('500ms ease-in', style({ left: '0%' }))
      ], { optional: true })
     ]),
     query(':enter', animateChild(), { optional: true }),
    ]),
   ]);
