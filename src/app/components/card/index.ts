import CardController from "./CardController.ts";
import ProgressBarController from "../progress-bar/ProgressBarController.ts";


export const cardController = new CardController('.card');


let currentCard: number = cardController.getCurrentCard();

cardController.toggleCard(currentCard, 'add', 'none');
cardController.toggleCard(currentCard, 'remove', 'visible');

cardController.setCurrentCard(6);

currentCard = cardController.getCurrentCard();
cardController.toggleCard(currentCard, 'remove', 'none');
cardController.toggleCard(currentCard, 'add', 'visible');


const progressBarController = new ProgressBarController('data-progress', currentCard);

let currentCardProgressBar: number = progressBarController.getCurrentCard();
progressBarController.updateProgressBar(currentCardProgressBar);



window.addEventListener('selectstart', (e: Event) => e.preventDefault());
window.addEventListener('click', handleNavigation);

function handleNavigation(e: Event) {
    let target = e.target as HTMLButtonElement;

    const nextButton: boolean = target.dataset.navigate === 'next';
    const prevButton: boolean = target.dataset.navigate === 'prev';

    const currentCard: number = cardController.getCurrentCard();
    const totalCards: number = cardController.getLengthCards();

    if (nextButton) {
        if (currentCard < totalCards - 1) {
            target.disabled = true;

            currentCardProgressBar = progressBarController.cardIncrement();
            progressBarController.updateProgressBar(currentCardProgressBar);

            setTimeout(() => {
                cardController.toggleCard(currentCard, 'remove', 'visible');

                setTimeout(() => {
                    cardController.increase();
                    const newCurrentCard: number = cardController.getCurrentCard();

                    cardController.toggleCard(currentCard, 'add', 'none');
                    cardController.toggleCard(newCurrentCard, 'remove', 'none');

                    setTimeout(() => {
                        cardController.toggleCard(newCurrentCard, 'add', 'visible');
                        target.disabled = false;
                    }, 100);
                }, 300);
            }, 300);
        } else {
            throw Error('All pages viewed, no more pages');
        }
    }

    if (prevButton) {
        if (currentCard > 0) {
            target.disabled = true;

            currentCardProgressBar = progressBarController.cardDecrement();
            progressBarController.updateProgressBar(currentCardProgressBar);

            setTimeout(() => {
                cardController.toggleCard(currentCard, 'remove', 'visible');

                setTimeout(() => {
                    cardController.decrease();
                    const newCurrentCard: number = cardController.getCurrentCard();

                    cardController.toggleCard(currentCard, 'add', 'none');
                    cardController.toggleCard(newCurrentCard, 'remove', 'none');

                    setTimeout(() => {
                        cardController.toggleCard(newCurrentCard, 'add', 'visible');
                        target.disabled = false;
                    }, 100);
                }, 300);
            }, 300);
        }
    }
}