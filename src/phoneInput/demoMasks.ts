import {PhoneInputMaskElement} from "./PhoneInput";

let MASKS: Array<PhoneInputMaskElement> = [
    {
        mask: "000 000-00-00",
        placeholder: "495 132-45-67",
        countryCode: "ru",
        code: "7",
        title: "Российская Федерация"
    },
    {
        mask: "000-000-0000",
        placeholder: "123-456-7890",
        countryCode: "us",
        code: "1",
        title: "United States"
    },
    {
        mask: "000 00000000",
        placeholder: "123 45678910",
        countryCode: "de",
        code: "49",
        title: "Germany"
    },
    {
        mask: "00 000 0000",
        placeholder: "12 345 6789",
        countryCode: "by",
        code: "375",
        title: "Республика Беларусь"
    }];

MASKS = MASKS.sort((elem1, elem2) => {
    if (elem1.countryCode === "ru") {
        return -1;
    }
    if (elem1.title < elem2.title) {
        return -1
    }
    else if (elem1.title > elem2.title) {
        return 1
    }
    else return 0;
});

export default MASKS;