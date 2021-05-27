import { capitalizeFirstLetter } from './capitalize-first-letter';

describe('capitalizeFirstLetter', () => {
  it('transforms string to String', () => {
    const result = capitalizeFirstLetter('string');
    expect(result).toEqual('String');
  });

  it('transforms sentence correctly', () => {
    const result = capitalizeFirstLetter('this is a sentence');
    expect(result).toEqual('This is a sentence');
  });
});
