import SoundPlayer from './SoundPlayer';
import SoundPlayerConsumer from './SoundPlayerConsumer';
jest.mock('./SoundPlayer');

beforeEach(() => {
    (SoundPlayer as any).mockClear();
});

it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
    expect(SoundPlayer).not.toHaveBeenCalled();

    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);

    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();

    const mockSoundPlayerInstance = (SoundPlayer as any).mock.instances[0];
    const mockPlaySoundFileMethod = mockSoundPlayerInstance.playSoundFile;
    expect(mockPlaySoundFileMethod.mock.calls[0][0]).toEqual(coolSoundFileName);

    expect(mockPlaySoundFileMethod).toHaveBeenCalledWith(coolSoundFileName);
    expect(mockPlaySoundFileMethod).toHaveBeenCalledTimes(1);

});
