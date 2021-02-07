function solve(arr) {
    let rectangles = arr.reduce((acc, curr) => {
        let [width, height] = curr;
        let currentRect = {
            width: width,
            height: height,
            area: function() {
                return currentRect.width * currentRect.height;
            },
            compareTo: function(other) {
                return other.area() - currentRect.area() || other.width - currentRect.width;
            }
        }
        acc.push(currentRect);
        return acc;
    }, [])

    let sortedRects = rectangles.sort((a, b) => a.compareTo(b));
    return sortedRects.map(r => console.log(r));
}