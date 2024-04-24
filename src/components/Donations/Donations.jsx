import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setDonations(data))
  },[])

  return (
    <div className="grid grid-cols-4 my-28 gap-10">
      {
        donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
      }
    </div>
  );
};

export default Donations;