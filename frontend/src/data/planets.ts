import type { Planet } from '../types'

export const PLANETS: Planet[] = [
  {
    name: 'Mercury',
    nameCn: '水星',
    ra: 12.5,
    dec: -3.0,
    mag: 0.5,
    color: '#b5b5b5',
    diameter: 4879,
    distance: '0.39 AU',
    type: '类地行星',
    orbitalPeriod: '88 天'
  },
  {
    name: 'Venus',
    nameCn: '金星',
    ra: 14.2,
    dec: -12.5,
    mag: -4.0,
    color: '#ffd5b5',
    diameter: 12104,
    distance: '0.72 AU',
    type: '类地行星',
    orbitalPeriod: '225 天'
  },
  {
    name: 'Mars',
    nameCn: '火星',
    ra: 10.0,
    dec: 10.0,
    mag: -1.5,
    color: '#ff7b4f',
    diameter: 6779,
    distance: '1.52 AU',
    type: '类地行星',
    orbitalPeriod: '687 天'
  },
  {
    name: 'Jupiter',
    nameCn: '木星',
    ra: 2.0,
    dec: 12.0,
    mag: -2.5,
    color: '#d4a574',
    diameter: 139820,
    distance: '5.20 AU',
    type: '气态巨行星',
    orbitalPeriod: '12 年'
  },
  {
    name: 'Saturn',
    nameCn: '土星',
    ra: 21.0,
    dec: -15.0,
    mag: 0.5,
    color: '#e8d5a3',
    diameter: 116460,
    distance: '9.58 AU',
    type: '气态巨行星',
    orbitalPeriod: '29 年'
  },
  {
    name: 'Uranus',
    nameCn: '天王星',
    ra: 1.5,
    dec: 8.0,
    mag: 5.7,
    color: '#b5e3e3',
    diameter: 50724,
    distance: '19.22 AU',
    type: '冰巨星',
    orbitalPeriod: '84 年'
  },
  {
    name: 'Neptune',
    nameCn: '海王星',
    ra: 23.5,
    dec: -5.0,
    mag: 7.8,
    color: '#4166f5',
    diameter: 49244,
    distance: '30.05 AU',
    type: '冰巨星',
    orbitalPeriod: '165 年'
  }
]
