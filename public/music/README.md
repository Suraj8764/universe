# Background Music Guide 🎵

The website comes with an embedded, zero-dependency **Web Audio API music-box chime synthesizer** that generates a soothing, gentle lullaby melody in the pentatonic scale when the user clicks "Play Melody".

### Want to use your own song/melody MP3?
1. Copy your MP3 file into this directory and name it:
   `friendship-melody.mp3`
2. That's it! The player in `components/BackgroundMusic.tsx` will automatically detect `/music/friendship-melody.mp3` and play your custom track instead of the synthesizer melody.
