const isConvertible = (current, target) => {
    if (current === '$' || current === 'руб') {
        return true;
    }

    if (target === 'руб' || target === '$') {
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

    if (target === '$') {
        return currency / rate;
    }

    if (target === 'руб') {
        return currency * rate;
    }

    return null;
}