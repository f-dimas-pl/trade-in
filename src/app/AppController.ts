import AppModel from "./AppModel.ts";
import AppView from "./AppView.ts";
import { URL_SUPPORTED_DEVICES, URL_CONDITIONS } from "../helpers/serverUrl.ts";

export default class AppController {
    private model: AppModel;
    private view: AppView;

    constructor() {
        this.model = new AppModel();
        this.view = new AppView();
    }

    greet(message: string): void {
        this.view.greeting(message);
    }

    async fetchTradeIn(): Promise<void> {
        try {
            const [devicesResponse, conditionsResponse] = await Promise.all([
                fetch(URL_SUPPORTED_DEVICES),
                fetch(URL_CONDITIONS),
            ]);

            if (!devicesResponse.ok || !conditionsResponse.ok) {
                throw new Error(`HTTP Error: ${devicesResponse.status}, ${conditionsResponse.status}`);
            }

            const [devicesData, conditionsData] = await Promise.all([
                devicesResponse.json(),
                conditionsResponse.json(),
            ]);

            console.log(devicesData);
            console.log(conditionsData);

            this.model.setDevices(devicesData);
            this.model.setConditions(conditionsData);
        } catch (error) {
            console.error("Error fetching Trade-In data:", error);
            throw error;
        }
    }

    getDevices(): string[] {
        return this.model.getDevices();
    }

    getConditions(): string[] {
        return this.model.getConditions();
    }
}
