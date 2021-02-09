function tickets(data, sortCriterion) {
    let str = 'Ticket';

    let ticketsArray = data.reduce((acc, ticketInfoLine) => {
        let [destination, price, status] = ticketInfoLine.split('|');
        let ticket = { destination, price: Number(price), status };
        acc.push(ticket);
        return acc;
    }, []);


    return ticketsArray.sort((a, b) => {
        return a[sortCriterion] - b[sortCriterion] || a[sortCriterion].localeCompare(b[sortCriterion]);
    });
}

console.log(tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));


console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));