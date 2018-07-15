"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoundPlayer_1 = require("./SoundPlayer");
const SoundPlayerConsumer_1 = require("./SoundPlayerConsumer");
jest.mock('./SoundPlayer');
beforeEach(() => {
    SoundPlayer_1.default.mockClear();
});
it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer_1.default();
    expect(SoundPlayer_1.default).toHaveBeenCalledTimes(1);
});
it('We can check if the consumer called a method on the class instance', () => {
    expect(SoundPlayer_1.default).not.toHaveBeenCalled();
    const soundPlayerConsumer = new SoundPlayerConsumer_1.default();
    expect(SoundPlayer_1.default).toHaveBeenCalledTimes(1);
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    const mockSoundPlayerInstance = SoundPlayer_1.default.mock.instances[0];
    const mockPlaySoundFileMethod = mockSoundPlayerInstance.playSoundFile;
    expect(mockPlaySoundFileMethod.mock.calls[0][0]).toEqual(coolSoundFileName);
    expect(mockPlaySoundFileMethod).toHaveBeenCalledWith(coolSoundFileName);
    expect(mockPlaySoundFileMethod).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=AutomaticMock.test.js.map