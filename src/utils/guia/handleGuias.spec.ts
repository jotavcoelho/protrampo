import { subtractValues, sumValues } from './handleGuias';

describe('subtractValues function', () => {
  it('subtracts float values correctly', () => {
    expect(subtractValues(1266.2, 784.52)).toBe('481.68')
    expect(subtractValues(281.38, 174.34)).toBe('107.04')
    expect(subtractValues(14.06, 8.72)).toBe('5.34')
    expect(subtractValues(28.14, 17.44)).toBe('10.70')
    expect(subtractValues(140.68, 87.16)).toBe('53.52')
    expect(subtractValues(70.34, 43.58)).toBe('26.76')
    expect(subtractValues(1800.8, 1115.76)).toBe('685.04')
    expect(subtractValues(1800.8, 43.58)).toBe('1757.22')
  })
})

describe('sumValues function', () => {
  it('sums float values correctly', () => {
    expect(sumValues(1266.2, 784.52)).toBe('2050.72')
    expect(sumValues(701.08, 1737.51)).toBe('2438.59')
    expect(sumValues(155.80, 386.10)).toBe('541.90')
    expect(sumValues(15.58, 38.61)).toBe('54.19')
    expect(sumValues(77.90, 193.05)).toBe('270.95')
    expect(sumValues(38.95, 96.54)).toBe('135.49')
  })
})
