const getRickOrMorty = require('./rickOrMorty.js');

async function resolveSelection(value) {
    let choice = await getRickOrMorty(value);
    return choice;
}

function onSuccess(result) {
    console.log(`Resolved: Selection = ${result}`);
}
function onFailure(result) {
    console.log(`Rejected: Selection = ${result}`);
}

async function main() {
    await resolveSelection(1).then(result => onSuccess(result), result => onFailure(result));
    await resolveSelection(2).then(result => onSuccess(result), result => onFailure(result));
    await resolveSelection(2).then(result => {
        console.log(`Resolved: What the duce; Selection = ${result}`);
    }).catch(result => {
        console.log(`Rejected: What the duce; Selection = ${result}`);
    });
}

main();
