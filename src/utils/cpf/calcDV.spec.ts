import { calcDV } from './calcDV';

describe('calcDV function', () => {
  it('calculates the DV correctly', () => {
    expect(calcDV('592131137')).toBe('592.131.137-57')
    expect(calcDV('882711539')).toBe('882.711.539-00')
    expect(calcDV('218256382')).toBe('218.256.382-25')
    expect(calcDV('855154388')).toBe('855.154.388-17')
    expect(calcDV('891069405')).toBe('891.069.405-01')
    expect(calcDV('850305313')).toBe('850.305.313-60')
    expect(calcDV('484146657')).toBe('484.146.657-64')
    expect(calcDV('486875257')).toBe('486.875.257-02')
    expect(calcDV('211086347')).toBe('211.086.347-10')
    expect(calcDV('709534364')).toBe('709.534.364-03')
  })
})
