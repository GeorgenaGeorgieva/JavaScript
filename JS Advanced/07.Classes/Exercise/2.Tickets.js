function tickets(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let parsedData = array.reduce((acc, ticketInformation) => {
        let splitted = ticketInformation.split('|').map(x => x.trim());
        let currentDestination = splitted[0];
        let currentPrice = +splitted[1];
        let currentStatus = splitted[2];

        acc.push(new Ticket(currentDestination, currentPrice, currentStatus));
        return acc;
    }, []);

    let sortedArray = parsedData.sort((a, b) => {
        return isNaN(a[criterion]) ? a[criterion].localeCompare(b[criterion]) : (a[criterion] - b[criterion]);
    });

    return sortedArray;
}