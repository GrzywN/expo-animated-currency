import module from '../animated-currency.module.web';

describe('AnimatedCurrencyModule (web)', () => {
  it('throws when any property is accessed', () => {
    expect(() => (module as Record<string, unknown>).foo).toThrow(
      '[expo-animated-currency]'
    );
  });

  it('error message mentions web', () => {
    expect(() => (module as Record<string, unknown>).foo).toThrow('web');
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
