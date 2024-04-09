import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should reverse any string passed as param', () => {
    const pipe = new ReversePipe();
    const result = pipe.transform('Hello');
    expect(result).toEqual('olleH');
  });
});
