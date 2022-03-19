import { ImPencil } from "react-icons/im";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import { wildersRequest } from "./../requests/wilders";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import PopInfo from "./PopInfo";

const Wilder = (props) => {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const { wilderId } = useParams();

  useEffect(() => {
    const findWilder = async () => {
      const wilder = await wildersRequest.find(wilderId);
      !wilder.data.success && navigate("/404");
      setState(wilder.data.result);
    };
    findWilder();
  }, [navigate, wilderId]);

  if (!Object.keys(state).length)
    return <PopInfo message="Récupération des données en cours" />;
  return (
    <div className="max-w-md mx-auto px-4 mt-10">
      <BackButton />
      <div className="relative m-0 shadow-lg flex bg-white">
        <div className="flex-no-shrink">
          <img
            alt=""
            className="w-64 h-64 block mx-auto"
            src="/images/head.png"
          />
        </div>
        <div className="flex-1 card-block relative">
          <div className="p-6">
            <h4 className="font-medium text-2xl mb-3">{state.name}</h4>
            <p className="leading-normal">Ville : {state.city}</p>
            {state.skills.length ? (
              <Skills skills={state.skills} />
            ) : (
              <div className="px-6 py-4 flex-1 ">
                <p>Aucun Skills</p>
              </div>
            )}

            <NavLink
              className="-m-4 w-12 h-12 flex items-center justify-center text-center no-underline rounded-full p-2 text-white bg-wildcolor absolute top-0 right-0"
              to={`/wilder/instance/1/${wilderId}`}
            >
              <ImPencil className="text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wilder;
