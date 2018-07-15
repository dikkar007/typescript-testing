"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoundPlayer_1 = require("./SoundPlayer");
class SoundPlayerConsumer {
    constructor() {
        this.soundPlayer = new SoundPlayer_1.default();
    }
    playSomethingCool() {
        const coolSoundFileName = 'song.mp3';
        this.soundPlayer.playSoundFile(coolSoundFileName);
    }
}
exports.default = SoundPlayerConsumer;
//# sourceMappingURL=SoundPlayerConsumer.js.map