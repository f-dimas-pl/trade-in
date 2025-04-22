export default class AppModel {
    private devices: string[];
    private conditions: string[];

    constructor() {
        this.devices = [];
        this.conditions = [];
    }

    setDevices(data: string[]) {
        this.devices = data;
    }

    setConditions(data: string[]) {
        this.conditions = data;
    }

    getDevices() {
        return this.devices;
    }

    getConditions() {
        return this.conditions;
    }
}