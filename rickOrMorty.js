let getRickOrMorty = (value) => {

    let data = {
        option1: 'Rick',
        option2: 'Morty',
    };
    const isRickSelected = value === 1? true: false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isRickSelected) {
                resolve(data.option1);
            } else {
                reject(data.option2);
            }
        }, 1000); // setTimeout
    }); // new promise
}; // chooseRickOrMorty

module.exports = getRickOrMorty;