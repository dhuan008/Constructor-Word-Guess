class Letter {
    constructor(char) {
        this.char = char.toUpperCase();
        this.guessed = false;
    }
    ifGuessed(guessVal) {
        return guessVal ? this.char : '_';
    }
    checkGuess(val) {
        val
    }
}