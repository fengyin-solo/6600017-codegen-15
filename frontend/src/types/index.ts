export interface Star {
  name: string
  ra: number   // right ascension in hours (0-24)
  dec: number  // declination in degrees (-90 to +90)
  mag: number  // apparent magnitude (lower = brighter)
  spectral: string
}

export interface Constellation {
  name: string
  nameCn: string
  stars: number[]  // indices into star array
  lines: [number, number][]  // pairs of star indices
}

export interface Planet {
  name: string
  nameCn: string
  ra: number
  dec: number
  mag: number
  color: string
  diameter: number
  distance: string
  type: string
  orbitalPeriod: string
}
