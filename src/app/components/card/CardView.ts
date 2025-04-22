export default class CardView {
    element: NodeListOf<HTMLElement>;

    constructor(element: string) {
        this.element = document.querySelectorAll(element);
    }

    getLengthCards(): number {
        return this.element.length;
    }

    toggleCard(index: number, typeToggle: string, className: string): void {
        if (typeToggle === 'add') {
            this.element[index].classList.add(className);
        } else if (typeToggle === 'remove') {
            this.element[index].classList.remove(className);
        }
    }
}