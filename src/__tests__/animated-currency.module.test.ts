jest.mock('expo', () => ({
  NativeModule: class {},
  requireNativeModule: jest.fn().mockReturnValue({}),
}));

import AnimatedCurrencyModule from '../animated-currency.module';

describe('AnimatedCurrencyModule', () => {
  it('calls requireNativeModule with AnimatedCurrency', () => {
    const { requireNativeModule } = jest.requireMock('expo');
    expect(requireNativeModule).toHaveBeenCalledWith('AnimatedCurrency');
  });

  it('exports the value returned by requireNativeModule', () => {
    const { requireNativeModule } = jest.requireMock('expo');
    expect(AnimatedCurrencyModule).toBe(
      requireNativeModule.mock.results[0].value
    );
  });
});
