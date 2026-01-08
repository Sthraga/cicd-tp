describe('Miscellaneous Tests', () => {
  // Test that intentionally fails
  it('should intentionally fail', () => {
    expect(true).toBe(false); // This assertion will always fail
  });

  // Test that is skipped
  it.skip('should be skipped', () => {
    expect(true).toBe(true); // This would pass if run, but is skipped
  });

  // Test that takes a random amount of time (300-1000ms)
  it('should complete after random delay', async () => {
    const delay = Math.floor(Math.random() * (1000 - 300 + 1)) + 300; // Random 300-1000ms
    await new Promise(resolve => setTimeout(resolve, delay));
    expect(true).toBe(true); // Simple passing assertion after delay
  });
});
