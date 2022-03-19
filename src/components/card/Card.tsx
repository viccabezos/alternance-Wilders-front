import { Link } from "react-router-dom";
import { Wilder } from "../../types";
import Skills from "../skills/skills";
export default function Card({ wilder }: { wilder: Wilder }): JSX.Element {
  console.log("WILDER", wilder);

  return (
    <div className="flex gap-5  " key={wilder._id}>
      <div className="flex flex-col border border-black  rounded-md">
        <img alt="avatar" src="img/Avatar.png" />
        <div className="text-center">
          <p>{wilder.name}</p>
          <p>{wilder.city}</p>
        </div>
        <div>
          <p>{wilder.description}</p>
        </div>
        {wilder.skills?.length && <Skills skills={wilder.skills} />}
        <div>
          <Link to={`wilder/${wilder._id}`}>See more</Link>
        </div>
      </div>
    </div>
  );
}
