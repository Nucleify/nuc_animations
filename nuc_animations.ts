import type { App } from 'vue'

import { NucAnimationHexagons } from '.'

export function registerNucAnimations(app: App<Element>): void {
  app.component('nuc-animation-hexagons', NucAnimationHexagons)
}
