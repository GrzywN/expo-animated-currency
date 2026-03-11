import AnimatedCurrency from '../animated-currency.view.android';

describe('AnimatedCurrency (Android)', () => {
  it('throws when called', () => {
    expect(() => AnimatedCurrency()).toThrow('[expo-animated-currency]');
  });

  it('error message mentions Android', () => {
    expect(() => AnimatedCurrency()).toThrow('Android');
  });

  it('error message includes Platform.select usage example', () => {
    expect(() => AnimatedCurrency()).toThrow('Platform.select');
  });
});
