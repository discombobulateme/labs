const store = require('../store');

describe('store function', () => {
  it('should return an object with a 4-character ID', async () => {
    const result = await store(Buffer.from('data'));
    expect(result).toHaveProperty('id');
    expect(result.id.length).toBe(4);
  });

  it('should handle non-buffer input by throwing an error', async () => {
    try {
      await store('not a buffer');
      // If it doesn't throw an error, fail the test
      fail('Expected an error but did not throw.');
    } catch (error) {
      expect(error.message).toBe('input must be a buffer');
    }
  });
});
