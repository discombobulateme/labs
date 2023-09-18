const store = require('../store');

describe('store function', () => {
  it('should return an object with a 4-character ID', (done) => {
    store(Buffer.from('data'), (err, result) => {
      expect(err).toBeNull();
      expect(result.id.length).toBe(4);
      done();
    });
  });

  it('should handle non-buffer input', (done) => {
    store('not a buffer', (err) => {
      expect(err.message).toBe('input must be a buffer');
      done();
    });
  });
});
