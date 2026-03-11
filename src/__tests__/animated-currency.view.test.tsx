import { render } from '@testing-library/react-native';

jest.mock('expo', () => ({
  requireNativeView: jest.fn().mockReturnValue(jest.fn().mockReturnValue(null)),
}));

import AnimatedCurrency from '../animated-currency.view';

describe('AnimatedCurrency (iOS)', () => {
  beforeEach(() => {
    (
      jest.requireMock('expo').requireNativeView.mock.results[0]
        .value as jest.Mock
    ).mockClear();
  });

  it('calls requireNativeView with AnimatedCurrency', () => {
    expect(jest.requireMock('expo').requireNativeView).toHaveBeenCalledWith(
      'AnimatedCurrency'
    );
  });

  it('renders without crashing', () => {
    expect(() => render(<AnimatedCurrency value={10} />)).not.toThrow();
  });

  it('forwards value prop to native view', () => {
    render(<AnimatedCurrency value={42} />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ value: 42 });
  });

  it('forwards currency and locale props to native view', () => {
    render(<AnimatedCurrency value={0} currency="PLN" locale="pl" />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ currency: 'PLN', locale: 'pl' });
  });

  it('forwards style prop to native view', () => {
    const style = { opacity: 0.5 };
    render(<AnimatedCurrency value={0} style={style} />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ style });
  });

  it('forwards fontSize prop to native view', () => {
    render(<AnimatedCurrency value={0} fontSize={24} />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ fontSize: 24 });
  });

  it('forwards fontWeight prop to native view', () => {
    render(<AnimatedCurrency value={0} fontWeight="300" />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ fontWeight: '300' });
  });

  it('forwards color prop to native view', () => {
    render(<AnimatedCurrency value={0} color="#FF0000" />);
    expect(
      (
        jest.requireMock('expo').requireNativeView.mock.results[0]
          .value as jest.Mock
      ).mock.calls[0][0]
    ).toMatchObject({ color: '#FF0000' });
  });
});
