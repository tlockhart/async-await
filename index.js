// import Module
const getRickOrMorty = require('./rickOrMorty.js');

// Call Asyncronous function and return its resolved results
async function resolveSelection(value) {
    const choice = await getRickOrMorty(value);
    return choice;
}

// OnSuccess Event Handler
function onSuccess(result) {
    console.log(`Resolved: Selection = ${result}`);
}

// OnFailure Event Handler
function onFailure(result) {
    console.log(`Rejected: Selection = ${result}`);
}

async function main() {
    // Option 1, send your own Success and Failure handlers
    
    // Resolve
    const response1 = await resolveSelection(1).then(result => onSuccess(result), result => onFailure(result));

    // Reject
    const response2 = await resolveSelection(2).then(result => onSuccess(result), result => onFailure(result));
    
    // Option 2, chain the results (Reject)
    const response3 = await resolveSelection(2).then(result => {
        console.log(`Resolved: What the deuce; Response = ${result}`);
    }).catch(result => {
        console.log(`Rejected: What the deuce; Response = ${result}`);
    });

    // Option 3: Modern Async Await used for API requests, with try catch block (Reject)
    try {
        // Resolved
        const response4 = await resolveSelection(1);
        console.log("Response4 =", response4);

        /* Condition, in API call the response needs to send a 200 status along with the object res.status(200).json(jsonObject).  Then in the condition check if the condition is resolved with if(response4 === 200).  For simplicity we just check if resolved.*/
        const isResolvedValueValid = response4 === 'Resolved to Rick';
        console.log("Is Response4 resolved value Valid?", isResolvedValueValid);
        if (isResolvedValueValid) {
            console.log("WUBBAWUBBALUBLUB! Response4", response4);
        }

        // Rejected:  Nothing after this line will get executed
        const response5 = await resolveSelection(2);

    }
    catch(error) {
        console.log("Response5", error);
    }
    
}

main();
