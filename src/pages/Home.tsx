import { useEffect, useState } from "react";
import { wildersRequest } from "../API/requests";
import CardsList from "../components/card/CardsList";

Home.propTypes = {};

function Home() {
  // const [cards, setCards] = useState([]);
  // const [wilder, setWilder] = useState({});
  const [wildersList, setWildersList] = useState([]);

  useEffect(() => {
    const recupData = async () => {
      await wildersRequest.getAll().then((res) => {
        console.log(res.result);
        setWildersList(res.result);
      });
    };
    recupData();
  }, []);

  return (
    <div>
      <p>HOME PAGE</p>

      <div className="mt-20">
        <CardsList wildersList={wildersList} />
      </div>
    </div>
  );
}

export default Home;
