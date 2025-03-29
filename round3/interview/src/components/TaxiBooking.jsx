class TaxiBooking {
    constructor() {
        this.taxis = ["Taxi-1", "Taxi-2", "Taxi-3", "Taxi-4"];
        this.bookings = [];
    }
    
    bookTaxi(customerId, pickup, drop, time) {
        let assignedTaxi = this.taxis.shift();
        this.bookings.push({ customerId, assignedTaxi, pickup, drop, time });
        return `${assignedTaxi} is allotted`;
    }
}const taxiApp = new TaxiBooking();
console.log(taxiApp.bookTaxi(1, "A", "B", 9));

export default TaxiBooking;