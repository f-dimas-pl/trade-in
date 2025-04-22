export default class ProgressBarModel {
    private currentCard: number;

    constructor(currentCard: number = 0) {
        this.currentCard = currentCard;
    }

    getCurrentCard() {
        return this.currentCard;
    }

    cardIncrement() {
        this.currentCard++;
    }

    cardDecrement() {
        this.currentCard--;
    }
}