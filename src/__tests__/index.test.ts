jest.mock('expo', () => ({
  NativeModule: class {},
  requireNativeModule: jest.fn().mockReturnValue({}),
  requireNativeView: jest.fn().mockReturnValue(jest.fn().mockReturnValue(null)),
}));

import DefaultExport, { AnimatedCurrency } from '../index';

describe('index exports', () => {
  it('exports default (native module)', () => {
    const { requireNativeModule } = jest.requireMock('expo');
    expect(DefaultExport).toBe(requireNativeModule.mock.results[0].value);
  });

  it('exports AnimatedCurrency as a function', () => {
    expect(typeof AnimatedCurrency).toBe('function');
  });
});
