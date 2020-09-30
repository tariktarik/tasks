const object = {
    property1: {
        property2: "Apple",
        property3: 'Orange'
    }
};

let path = "property1.property2";

function lookup(obj, pa) {
    if (Object.keys(object).length !== 0 && object.constructor === Object) {

        if (path) {
            let x = (pa.split("."));

            if (x[0] in obj && x[1] in obj[x[0]]) {
                return obj[x[0]][x[1]];
            } else {
                return "Please provide a valid path";
            }
        } else {
            return "Please provide a path";
        }
    } else {
        return "Please provide an valid object";
    }


};
console.log(lookup(object, path));