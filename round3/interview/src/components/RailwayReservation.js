class RailwayReservation {
    constructor() {
        this.seats = { AC: 60, NonAC: 60, Seater: 60 };
    }
    
    bookSeat(type) {
        if (this.seats[type] > 0) {
            this.seats[type]--;
            return "Seat booked!";
        } else {
            return "No seats available.";
        }
    }
}

const railway = new RailwayReservation();
console.log(railway.bookSeat("AC"));

export default RailwayReservation