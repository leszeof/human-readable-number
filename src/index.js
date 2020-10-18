module.exports = function toReadable (number) {
    let dictionaryOne = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
      }

      let dictionaryTwo = {
        2 : 'twenty',
        3 : 'thirty',
        4 : 'forty',
        5 : 'fifty',
        6 : 'sixty',
        7 : 'seventy',
        8 : 'eighty',
        9 : 'ninety',
    }

    let firstDigit = Math.floor(number / 100);
    let secondDigit = (Math.floor(number / 10)) % 10;
    let thirdDigit = number % 10;
    let lastTwoDigit = String(secondDigit) + String(thirdDigit);

    // когда 0
    if (number === 0) {
        return 'zero';
    }

    // когда меньше 19
    if (number <= 19) {
        return dictionaryOne[number];
    }

    if (number < 100 && thirdDigit === 0) {
        return `${dictionaryTwo[secondDigit]}`
    }

    // когда меньше 100
    if (number < 100) {
        return `${dictionaryTwo[secondDigit]} ${dictionaryOne[thirdDigit]}`
    }

    // 101, 203, 505 (везде где 0 в середине)
    if (secondDigit === 0 && thirdDigit !== 0) {
        return `${dictionaryOne[firstDigit]} hundred ${dictionaryOne[thirdDigit]}`
    }

    // 200 300 400 500 600 700 800 (два нуля в числе)
    if (thirdDigit === 0 && secondDigit === 0) {
        return `${dictionaryOne[firstDigit]} hundred`
    }

    // 910 920 940 960 970
    if (thirdDigit === 0 && number > 100) {
        if (Number(lastTwoDigit) === 10) {
            return `${dictionaryOne[firstDigit]} hundred ${dictionaryOne[Number(lastTwoDigit)]}`
        } else {
            return `${dictionaryOne[firstDigit]} hundred ${dictionaryTwo[secondDigit]}`
        }
    }
    
    if (Number(lastTwoDigit) <= 19) {
        return `${dictionaryOne[firstDigit]} hundred ${dictionaryOne[Number(lastTwoDigit)]}`
    }
    
    return `${dictionaryOne[firstDigit]} hundred ${dictionaryTwo[secondDigit]} ${dictionaryOne[thirdDigit]}`
}