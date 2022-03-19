import { Skill } from "../../types";

export default function Skills({ skills }: { skills: Skill[] }): JSX.Element {
  return (
    <div className="flex flex-col items-center  bg-red-200 text-center">
      {skills.map((skill) => (
        <div key={skill._id} className="flex gap-4 ">
          <p>{skill.title}</p>
          <p>{skill.votes}</p>
        </div>
      ))}
    </div>
  );
}
