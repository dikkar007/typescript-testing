import SoundPlayer from './SoundPlayer';

export default class SoundPlayerConsumer {
  soundPlayer: SoundPlayer;
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
  
}
