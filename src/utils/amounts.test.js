import { amountFormatter } from "./amounts";

amountFormatter
test('test amount formatter', () => {
    expect(amountFormatter(1)).toBe('1')
    expect(amountFormatter(100)).toBe('100')
    expect(amountFormatter(1000)).toBe('1k')
    expect(amountFormatter(1200)).toBe('1.2k')
    expect(amountFormatter(1200000)).toBe('1.2M')
});
  