import { setWorldConstructor } from '@cucumber/cucumber';
import practicePage from "../pages/practicePage"

class CustomWorld {

    constructor() {
        this.browser = undefined;
        this.context = undefined;
        this.page = undefined;
    }

    get practicePage() {
        return new practicePage(this.page);
    }

}

setWorldConstructor(CustomWorld);