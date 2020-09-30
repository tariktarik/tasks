const data = [
    { id: 1, value: 3 },
    { id: 2, value: 7 },
    { id: 3, value: 3 },
    { id: 4, value: 1 },
    { id: 5, value: 4 }
];
const uniqueValues = [];
const doubledValues = [];
const targetSequence = [];
let newValue;

for (let i = 1; i < data.length; i++) {

    if (data[i] != data[i + 1]) {
        uniqueValues.push(data[i]);
    }

    if (data[1].value == data[i - 1].value) {
        doubledValues.push(data[i].value);
    }

}

for (let i = 0; i < uniqueValues.length; i++) {

    if (uniqueValues[i].value >= doubledValues[0]) {
        targetSequence.push(uniqueValues[i].value);
        targetSequence.sort();
    }
}

for (let i = 1; i < targetSequence.length; i++) {
    if (targetSequence[i + 1] - targetSequence[i] > 1) {
        newValue = targetSequence[i] + 1;
    }
}


const newId = uniqueValues[uniqueValues.length - 1].id + 1;

console.log({ id: newId, value: newValue });