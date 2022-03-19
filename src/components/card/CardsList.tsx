import { Wilder } from "../../types";
import Card from "./Card";

function CardsList({ wildersList }: { wildersList: Wilder[] }): JSX.Element {
  console.log("wilders list", wildersList);

  return (
    <div className="flex p-20 gap-5 ">
      {wildersList.map((wilder: Wilder) => (
        <div key={wilder._id}>
          <Card wilder={wilder} />
        </div>
      ))}
    </div>
  );
}

export default CardsList;
