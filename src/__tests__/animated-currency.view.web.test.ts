import AnimatedCurrency from '../animated-currency.view.web';

describe('AnimatedCurrency (web)', () => {
  it('throws when called', () => {
    expect(() => AnimatedCurrency()).toThrow('[expo-animated-currency]');
  });

  it('error message mentions web', () => {
    expect(() => AnimatedCurrency()).toThrow('web');
  });

  it('error message includes Platform.select usage example', () => {
    expect(() => AnimatedCurrency()).toThrow('Platform.select');
  });
});
