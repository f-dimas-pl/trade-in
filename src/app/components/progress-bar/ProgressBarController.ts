import ProgressBarModel from "./ProgressBarModel.ts";
import ProgressBarView from "./ProgressBarView.ts";

export default class ProgressBarController {
    private model: ProgressBarModel;
    private view: ProgressBarView;

    constructor (element: string, currentCard: number) {
        this.model = new ProgressBarModel(currentCard);
        this.view = new ProgressBarView(element);
    }

    cardIncrement(): number {
        this.model.cardIncrement();
        return this.model.getCurrentCard();
    }

    cardDecrement(): number {
        this.model.cardDecrement();
        return this.model.getCurrentCard();
    }

    getCurrentCard(): number {
        return this.model.getCurrentCard();
    }

    updateProgressBar(currentCard: number) {
        this.view.updateProgressBar(currentCard);
    }
}