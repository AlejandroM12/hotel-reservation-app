const listHotels = async () => {
  const res = await fetch('http://localhost:3001/hotels');
  if (!res.ok) {
    throw new Error('Network response was not OK');
  }
  return res.json();
};
export default listHotels;
