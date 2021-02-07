function createObject(input) {
    let newObj = {};
    let i = 0;

    const regex = new RegExp(/(A-Z])*\w+/gi);
    let args = input.match(regex);

    for (i = 0; i < args.length; i += 2) {
        let property = args[i];
        let value = args[i + 1];
        newObj[property] = value;
    }

    return newObj;
}
console.log(createObject(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));