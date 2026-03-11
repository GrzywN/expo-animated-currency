jest.mock('expo', () => ({
  NativeModule: class {},
  requireNativeModule: jest.fn().mockReturnValue({}),
  requireNativeView: jest.fn().mockReturnValue(jest.fn().mockReturnValue(null)),
}));

import DefaultExport, { AnimatedCurrencyView } from '../index';

describe('index exports', () => {
  it('exports default (native module)', () => {
    const { requireNativeModule } = jest.requireMock('expo');
    expect(DefaultExport).toBe(requireNativeModule.mock.results[0].value);
  });

  it('exports AnimatedCurrencyView as a function', () => {
    expect(typeof AnimatedCurrencyView).toBe('function');
  });
});
