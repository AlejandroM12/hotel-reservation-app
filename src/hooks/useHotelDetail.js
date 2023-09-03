const fetchHotelDetail = async (hotelId) => {
  const response = await fetch(`http://localhost:3001/hotels/${hotelId}`);
  if (!response.ok) {
    throw new Error('Network response was not OK');
  }
  return response.json();
};

export default fetchHotelDetail;
