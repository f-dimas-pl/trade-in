export default class CardModel {
    private currentCard: number;

    constructor(currentCard: number = 0) {
        this.currentCard = currentCard;
    }

    getCurrentCard(): number {
        return this.currentCard;
    }

    increaseCard(): void {
        this.currentCard = this.currentCard + 1;
    }

    decreaseCard(): void {
        this.currentCard = this.currentCard - 1;
    }

    setCurrentCard(value: number) {
        this.currentCard = value;
    }
}