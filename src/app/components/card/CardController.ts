import CardModel from "./CardModel.ts";
import CardView from "./CardView.ts";

export default class CardController {
    private model: CardModel;
    private view: CardView;

    constructor(element: string) {
        this.model = new CardModel();
        this.view = new CardView(element);
    }

    getCurrentCard(): number {
        return this.model.getCurrentCard();
    }

    increase(): void {
        this.model.increaseCard();
    }

    decrease(): void {
        this.model.decreaseCard();
    }

    toggleCard(index: number, typeToggle: string, className: string): void {
        this.view.toggleCard(index, typeToggle, className);
    }

    getLengthCards(): number {
        return this.view.getLengthCards()
    }

    setCurrentCard(value: number) {
        this.model.setCurrentCard(value);
    }
}