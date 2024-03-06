import React, { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDatabase, ref, get, remove } from "firebase/database";
import "./summarypagestyles.css";
import { getAuth } from "firebase/auth";

const SummaryPage = () => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [transport, setTransport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [hotel, setHotel] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const fetchBookingInfo = async () => {
      if (!userId) {
        return;
      }

      const database = getDatabase(app);
      const userIdRef = ref(database, `bookings/${userId}`);

      get(userIdRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          for (const key in userData) {
            if (userData.hasOwnProperty(key)) {
              const childData = userData[key];
              setDestination(childData.destination);
              setArrivalDate(childData.arrivalDate);
              setTransport(childData.transport);
              setDepartureDate(childData.departureDate);
              setHotel(childData.hotel);
              setNumPeople(childData.numPeople);
              setTotalPrice(childData.totalPrice);
              setBookingInfo(1);
            }
          }
        } else {
          console.log("No data found in Firebase for userId:", userId);
        }
      });
    };

    fetchBookingInfo();
  }, [userId]);

  const handleCancelTrip = async () => {
    if (userId) {
      const database = getDatabase(app);
      const bookingRef = ref(database, `bookings/${userId}/`);

      try {
        await remove(bookingRef);
        setBookingInfo(null); // Clear the booking info state on successful deletion
      } catch (error) {
        console.error("Error deleting booking information:", error);
      }
    }
  };

  return (
    <div className="whole-summary">
      <div className="summary-page">
        <h2>Your Trips</h2>
        <a className="summary-back" href="/service">
          Back to planning
        </a>

        {bookingInfo ? (
          <div>
            <div className="show-item">
              <p>Destination:</p>
              <p>{destination}</p>
            </div>
            <div className="show-item">
              <p>Arrival Date:</p>
              <p>{arrivalDate}</p>
            </div>
            <div className="show-item">
              <p>Departure Date:</p>
              <p>{departureDate}</p>
            </div>
            <div className="show-item">
              <p>Transport:</p>
              <p>{transport}</p>
            </div>
            <div className="show-item">
              <p>Hotel:</p>
              <p>{hotel}</p>
            </div>
            <div className="show-item">
              <p>Number of People:</p>
              <p>{numPeople}</p>
            </div>
            <div className="show-item">
              <p>Total Price:</p>
              <p>&#8377;{totalPrice}</p>
            </div>
            <button className="cns" onClick={handleCancelTrip}>
              Cancel Trip
            </button>
          </div>
        ) : (
          <p>No booking information available.</p>
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
