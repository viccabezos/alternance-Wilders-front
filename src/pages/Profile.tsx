import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { wildersRequest } from "../API/requests";
import { Wilder, Skill } from "../types";

function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID", id);

  const [wilder, setWilder] = useState<Wilder>({
    name: "",
    city: "",
    description: "",
  });
  useEffect(() => {
    const getWilder = async () => {
      await wildersRequest.getOne(id).then((res) => {
        setWilder(res.result);
      });
    };
    getWilder();
  }, []);
  return (
    <div>
      {`PROFILE of ${id}`}
      HELLOOOOO
      <button onClick={() => navigate("/")}>CHANGE TO HOME PAGE</button>
      <p>{wilder.name}</p>
      <p>{wilder.city}</p>
      <p>{wilder.description}</p>
    </div>
  );
}

export default Profile;
