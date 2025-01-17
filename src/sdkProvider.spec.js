import sdkProvider from './sdkProvider';

describe('provider for the SDK', () => {
  let factory;
  let method;

  beforeEach(() => {
    global.window.FB = 'FB';
    factory = jest.fn(() => () => undefined);

    method = sdkProvider(factory);
  });

  it('injects the global FB function into the given factory', () => {
    method();
    expect(factory).toHaveBeenCalledWith('FB');
  });
});
