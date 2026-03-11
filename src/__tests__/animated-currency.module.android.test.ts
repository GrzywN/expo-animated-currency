import module from '../animated-currency.module.android';

describe('AnimatedCurrencyModule (Android)', () => {
  it('throws when any property is accessed', () => {
    expect(() => (module as Record<string, unknown>).foo).toThrow(
      '[expo-animated-currency]'
    );
  });

  it('error message mentions Android', () => {
    expect(() => (module as Record<string, unknown>).foo).toThrow('Android');
  });

  it('error message includes Platform.select usage example', () => {
    expect(() => (module as Record<string, unknown>).foo).toThrow(
      'Platform.select'
    );
  });

  it('throws on every property access', () => {
    expect(() => (module as Record<string, unknown>).a).toThrow();
    expect(() => (module as Record<string, unknown>).b).toThrow();
  });
});
