import React, { useState } from "react";

const RailwayReservation = () => {
  const initialBerths = { Lower: 21, Middle: 21, Upper: 21, "Side-Lower": 9, "Side-Upper": 9 };
  const [berths, setBerths] = useState(initialBerths);
  const [racTickets, setRacTickets] = useState(9);
  const [waitingList, setWaitingList] = useState(10);
  const [confirmedPassengers, setConfirmedPassengers] = useState([]);
  const [racPassengers, setRacPassengers] = useState([]);
  const [waitingListPassengers, setWaitingListPassengers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [preference, setPreference] = useState("Lower");

  const bookTicket = () => {
    if (!name || !age) {
      alert("Please enter name and age");
      return;
    }

    if (age < 5) {
      alert(`${name} (age ${age}) is below 5. No ticket allocated.`);
      return;
    }

    let berthType = preference;
    if (age > 60 || (gender === "Female" && preference === "Lower")) {
      berthType = berths["Lower"] > 0 ? "Lower" : preference;
    }

    if (berths[berthType] > 0) {
      setBerths({ ...berths, [berthType]: berths[berthType] - 1 });
      setConfirmedPassengers([...confirmedPassengers, { name, age, gender, allocatedBerth: berthType }]);
      alert(`✅ Ticket confirmed for ${name} in ${berthType} berth.`);
    } else if (racTickets > 0) {
      setRacTickets(racTickets - 1);
      setRacPassengers([...racPassengers, { name, age, gender, allocatedBerth: "RAC" }]);
      alert(`🟠 ${name} is placed in RAC.`);
    } else if (waitingList > 0) {
      setWaitingList(waitingList - 1);
      setWaitingListPassengers([...waitingListPassengers, { name, age, gender, allocatedBerth: "Waiting List" }]);
      alert(`🟡 ${name} is placed in Waiting List.`);
    } else {
      alert("❌ No tickets available.");
    }
  };

  const cancelTicket = () => {
    const cancelName = prompt("Enter name to cancel ticket:");
    if (!cancelName) return;

    let updatedConfirmed = confirmedPassengers.filter(p => p.name !== cancelName);
    let canceledPassenger = confirmedPassengers.find(p => p.name === cancelName);

    if (canceledPassenger) {
      setBerths({ ...berths, [canceledPassenger.allocatedBerth]: berths[canceledPassenger.allocatedBerth] + 1 });
      setConfirmedPassengers(updatedConfirmed);
      alert(`🛑 ${cancelName}'s ticket is canceled.`);
    } else {
      alert("❌ Passenger not found.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🚆 Railway Reservation System</h2>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select value={preference} onChange={(e) => setPreference(e.target.value)}>
        <option value="Lower">Lower</option>
        <option value="Middle">Middle</option>
        <option value="Upper">Upper</option>
        <option value="Side-Lower">Side-Lower</option>
        <option value="Side-Upper">Side-Upper</option>
      </select>
      <br />
      <button onClick={bookTicket}>🎟️ Book Ticket</button>
      <button onClick={cancelTicket}>❌ Cancel Ticket</button>
      <h3>🎟️ Available Tickets:</h3>
      <p>{`Lower: ${berths.Lower}, Middle: ${berths.Middle}, Upper: ${berths.Upper}, Side-Lower: ${berths["Side-Lower"]}, Side-Upper: ${berths["Side-Upper"]}, RAC: ${racTickets}, Waiting: ${waitingList}`}</p>
      <h3>✅ Confirmed Tickets</h3>
      {confirmedPassengers.map((p, index) => (<p key={index}>{p.name} | {p.age} | {p.gender} | {p.allocatedBerth}</p>))}
      <h3>🟠 RAC Tickets</h3>
      {racPassengers.map((p, index) => (<p key={index}>{p.name} | {p.age} | {p.gender} | RAC</p>))}
      <h3>🟡 Waiting List</h3>
      {waitingListPassengers.map((p, index) => (<p key={index}>{p.name} | {p.age} | {p.gender} | Waiting</p>))}
    </div>
  );
};

export default RailwayReservation;
