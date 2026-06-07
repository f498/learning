const USD = '$';
const RUB = 'руб';

const isConvertible = (current, target) => {
    if (current === USD && target === RUB) {
        return true;
    }

    if (current === RUB && target === USD) {
        return true;
    }

    if (current === USD && target === USD) {
        return true;
    }

    if (current === RUB && target === RUB) {
        return true;
    }

    return false;
}

const convertCurrency = (currency, current, target) => {
    const rate = 73.47;

    if (typeof currency !== 'number'){
        return null;
    }
    
    if (!isConvertible(current, target)) {
        return null;
    }

    if (current === target) {
        return currency;
    }

    if (target === 'USD') {
        return currency / rate;
    }

    if (target === 'RUB') {
        return currency * rate;
    }

    return null;
}