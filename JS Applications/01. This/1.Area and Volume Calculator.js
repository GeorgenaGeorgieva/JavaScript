function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let arrFromJson = JSON.parse(input);

    function calc(obj) {
        let areaObj = Math.abs(area.call(obj));
        let volume = Math.abs(vol.call(obj));
        return { area: areaObj, volume: volume };
    }
    return arrFromJson.map(calc);
};