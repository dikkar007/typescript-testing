import SoundPlayer from './SoundPlayer';
import SoundPlayerConsumer from './SoundPlayerConsumer';
jest.mock('./SoundPlayer');

describe('When SoundPlayer throws an error', async () => {
  beforeAll(() => {
    (SoundPlayer as any).mockImplementation(() => {
      return {
        playSoundFile: (fileName: string) => {
          throw new Error('Test error');
        },
      };
    });
  });

  it('Should throw an error when calling playSomethingCool', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
  });
});
