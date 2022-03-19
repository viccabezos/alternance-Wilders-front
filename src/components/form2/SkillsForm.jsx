function SkillsForm({ register, index }) {
  return (
    <div>
      <div className="flex gap-5">
        <label htmlFor="skillTitle">Skill Name</label>
        <input
          name="skillName"
          placeholder="Node js"
          {...register(`skills.${index}.title`)}
        />
      </div>
      <div className="flex gap-5">
        <label htmlFor="Votes">Skill Vote</label>
        <select {...register(`skills.${index}.votes`)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
}

export default SkillsForm;
