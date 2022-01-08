import { BRLToFloat, floatToBRL } from './refineGuiaValues';

describe('BRLToFloat function', () => {
  it('converts BRL to float', () => {
    expect(BRLToFloat('R$ 1.266,20')).toBe(1266.2)
    expect(BRLToFloat('R$ 281,38')).toBe(281.38)
    expect(BRLToFloat('R$ 14,06')).toBe(14.06)
    expect(BRLToFloat('R$ 28,14')).toBe(28.14)
    expect(BRLToFloat('R$ 140,68')).toBe(140.68)
    expect(BRLToFloat('R$ 70,34')).toBe(70.34)
    expect(BRLToFloat('R$ 1.800,80')).toBe(1800.8)
  })
})

describe('floatToBRL function', () => {
  it('converts float to BRL', () => {
    expect(floatToBRL('1266.2')).toBe('R$ 1.266,20')
    expect(floatToBRL('281.38')).toBe('R$ 281,38')
    expect(floatToBRL('14.06')).toBe('R$ 14,06')
    expect(floatToBRL('28.14')).toBe('R$ 28,14')
    expect(floatToBRL('140.68')).toBe('R$ 140,68')
    expect(floatToBRL('70.34')).toBe('R$ 70,34')
    expect(floatToBRL('1800.8')).toBe('R$ 1.800,80')
  })
})
