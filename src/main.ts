import "./assets/scss/reset.scss";
import "./assets/scss/style.scss";
import "./assets/scss/loader.scss";
import "./assets/scss/fonts.scss";
import "./assets/scss/custom-select.scss";
import "./assets/scss/custom-input.scss";
import "./assets/scss/modal.scss";
import "./assets/scss/contact-method.scss";
import "./assets/scss/trade-in-method.scss";
import "./assets/scss/custom-radio.scss";
import "./assets/scss/progress.scss";
import "./assets/scss/card.scss";
import "./assets/scss/button.scss";
import "./assets/scss/helpers.scss";
import "./app/components/card";

import { API_GOOGLE_SHEET } from "./helpers/ApiGoogleSheet.ts";

import AppController from "./app/AppController.ts";

const appController = new AppController();
appController.fetchTradeIn();

window.addEventListener("load", async () => {
    const form = document.querySelector('#tradeIn') as HTMLFormElement | null;
    const loader = document.querySelector('.loader') as HTMLElement | null;

    if (form && loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            form.classList.remove('hidden');
            form.classList.remove('none');
        }, 1500);
    }
});




const form = document.forms.namedItem('submit-to-google-sheet') as HTMLFormElement | null;
const nameInput = document.querySelector('#name') as HTMLInputElement | null;
const numberInput = document.querySelector('#number') as HTMLInputElement | null;
const dateInput = document.querySelector('#date') as HTMLInputElement | null;
const buttonSubmit = document.querySelector('button[type="submit"]') as HTMLButtonElement | null;

const validateForm = () => {
    if (buttonSubmit && nameInput && numberInput) {
        buttonSubmit.disabled = nameInput.value.trim() === '' || numberInput.value.trim() === '';
    }
};


if (form && nameInput && numberInput && dateInput && buttonSubmit) {
    validateForm();

    form.addEventListener('submit', async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();
        validateForm();

        const formData = new FormData(form);

        const today: string = new Date().toLocaleString();

        if (dateInput) {
            dateInput.value = today;
        }

        formData.set('date', today);

        try {
            const response = await fetch(API_GOOGLE_SHEET, { method: 'POST', body: formData});

            if (!response.ok) {
                new Error(`Error: ${response.status}`);
            }

            buttonSubmit.disabled = true;
            form.reset();
            validateForm();
        } catch (error) {
            console.error((error as Error).message);
        }
    });

    nameInput.addEventListener('input', validateForm);
    numberInput.addEventListener('input', validateForm);
}