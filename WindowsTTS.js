// TTS Native Windows for linguist by MoonDragon ( https://github.com/MoonDragon-MD/linguist-WindowsTTS )
class WindowsTTS {
    async getAudioBuffer(text, language) {
        // Creates a new SpeechSynthesisUtterance object with the text to be synthesized
        const synth = window.speechSynthesis;

        // Creates a new SpeechSynthesisUtterance object with the text to be synthesized
        const utterance = new SpeechSynthesisUtterance(text);

        // Set the language, if specified
        if (language) {
            utterance.lang = language;
        }

        // Select the desired voice (you can configure it based on the voices available in Windows tts)
        const voices = synth.getVoices();
        const voice = voices.find(v => v.name === "Microsoft Zira Desktop" || v.lang === language) || voices[0]; // default to first available voice
        utterance.voice = voice;

        return new Promise((resolve, reject) => {
            // When the speech synthesis is complete, resolve the promise
            utterance.onend = (event) => {
                resolve();
            };

            // If there is a mistake, reject the promise
            utterance.onerror = (event) => {
                reject(event.error);
            };

            // Use speechSynthesis to play audio
            synth.speak(utterance);
        });
    }

    static getSupportedLanguages() {
        return ['en', 'it']; // Supported languages u200bu200bmay vary depending on your Windows TTS configuration
    }
}

WindowsTTS;
