export default class ProgressBarView {
    element: NodeListOf<HTMLElement>;

    constructor(element: string) {
        this.element = document.querySelectorAll(`[${element}]`)
    }

    elements = {
        progressBarIndicator: document.querySelectorAll('.progress__line'),
        progressBarValue: document.querySelectorAll('.progress__value'),
    }

    updateProgressBar(currentCard: number) {
        const countableCards: number = this.element.length;

        const progress: number = Math.floor(currentCard * 100 / countableCards);

        this.elements.progressBarIndicator.forEach(el => (el as HTMLElement).style.width = progress + '%');
        this.elements.progressBarValue.forEach(el => el.textContent = progress + '%');
    }
}