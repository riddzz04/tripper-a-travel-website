import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import "./tripplannerstyles.css";
import { auth, app } from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';

const TripPlanning = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [destination, setDestination] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [transport, setTransport] = useState('');
  const [hotel, setHotel] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const destinations = ['Goa', 'Ladakh', 'Agra'];
  const transports = ['Car', 'Train', 'Flight'];
  const hotels = {
    Goa: ['5-Star', '4-Star', '3-Star'],
    Ladakh: ['Luxury', 'Standard', 'Budget'],
    Agra: ['Premium', 'Deluxe', 'Economy'],
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const calculatePrice = () => {
    const destinationPrice = 10000;
    const transportPrice = 5000;
    const hotelPrice = 7500;

    return (
      (destinationPrice + transportPrice + hotelPrice) * numPeople
    ).toFixed(2);
  };

  const handleBookNow = () => {
    if (!user) {
      return;
    }
    if (!destination || !arrivalDate || !departureDate || !transport || !hotel || !numPeople) {
      window.alert('Please Fill all Details');
      return;
      
    }
    if(arrivalDate>departureDate)
    {
      window.alert('Arrival date cannot be ahead of departure date');
      return;
    }
    if (new Date(arrivalDate) < new Date()) {
      window.alert('Arrival date cannot be in the past');
      return;
    }
    

    const bookingInfo = {
      userId: user.uid,
      destination,
      arrivalDate,
      departureDate,
      transport,
      hotel,
      numPeople,
      totalPrice: calculatePrice(),
    };

    navigate('/summary');
    const database = getDatabase(app);
    push(ref(database, 'bookings/' + user.uid), bookingInfo)
      .then(() => {
        navigate('/summary');
        setDestination('');
        setArrivalDate('');
        setDepartureDate('');
        setTransport('');
        setHotel('');
        setNumPeople(1);
        setTotalPrice(0);
      })
      .catch((error) => {
        console.error('Error storing data in Firebase:', error);
      });
  };
  
  const handleSubmit = () => {
    const totalPrice = calculatePrice();
    setTotalPrice(totalPrice);
  };
  return (
    <div className='planner'>
      <div className='upper-container'>
        <h2 className='headdd'>Trip Planning</h2>
        <div className='form-item'>
          <label>Destination:</label>
          <select onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select destination</option>
            {destinations.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
        <div className='form-item'>
          <label>Arrival Date:</label>
          <input
            type="date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label>Departure Date:</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label>Transport:</label>
          <select onChange={(e) => setTransport(e.target.value)}>
            <option value="">Select transport</option>
            {transports.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
        {destination && (
          <div className='form-item'>
            <label>Hotel:</label>
            <select onChange={(e) => setHotel(e.target.value)}>
              <option value="">Select hotel</option>
              {hotels[destination].map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className='form-item'>
          <label>Number of People:</label>
          <input
            type="number"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
          />
        </div>
        <button className="cns" onClick={handleSubmit}>Calculate and Show Summary</button>
      </div>
      <div className='lower-container'>
        {totalPrice > 0 && (
          <div>
            <h2>Booking Summary</h2>
            <div className='show-item'><p>Destination:</p><p>{destination}</p> </div>
            <div className='show-item'><p>Arrival Date:</p><p> {arrivalDate}</p></div>
            <div className='show-item'><p>Departure Date:</p><p> {departureDate}</p></div>
            <div className='show-item'><p>Transport:</p><p> {transport}</p></div>
            <div className='show-item'><p>Hotel:</p><p> {hotel}</p></div>
            <div className='show-item'><p>Number of People:</p><p> {numPeople}</p></div>
            <div className='show-item'><p>Total Price:</p><p> &#8377;{totalPrice}</p></div>
            <button className='cns' onClick={handleBookNow}>Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanning;

