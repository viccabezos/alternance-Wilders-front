import { useState } from "react";
import { Form, Field } from "react-final-form";
import { wildersRequest } from "../../API/requests";
import ButtonPlus from "./ButtonPlus";

const onSubmit = async (values) => {
  console.log(JSON.stringify(values, 0, 2));
  wildersRequest.create(values).then((res) => {
    console.log(res);
  });
};

const required = (value) => (value ? undefined : "Required");

function SkillsTESTForm() {
  const [addInputList, setAddInputList] = useState([
    { skillName: "", skillVote: 1 },
  ]);

  const handleChange = (e, i, type) => {
    // e => event pour récupérer la valeur, i pour l'index (pour savoir lequel modifier dans le tableau d'input, et le type (skillName, ou skillVote))
    let list = [...addInputList];
    list[i][type] = e.target.value;
    setAddInputList(list);
  };
  const handleAddInput = () => {
    console.log("handle add input");

    setAddInputList((addInputList) => [
      ...addInputList,
      { skillName: "", skillVote: 1 },
    ]);
  };

  const handleRemoveSkill = (index) => {
    console.log(index);
    const list = [...addInputList];
    console.log(list);
    list.splice(index, 1);
    console.log("INDEX", index);
    setAddInputList(list);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            {addInputList.map((x, i) => {
              return (
                <div className="flex gap-5 ">
                  <Field name={`skill name ${i}`} validate={required}>
                    {({ input, meta }) => (
                      <div className="flex gap-5">
                        <label>Skill name</label>
                        <input
                          {...input}
                          value={addInputList[i].skillName}
                          onChange={(e) => handleChange(e, i, "skillName")}
                          className="border-b-2 border-red-300"
                          type="text"
                          placeholder="react.js"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>

                  <div className="flex gap-5">
                    <label>Votes</label>
                    <Field
                      name={`votes ${i}`}
                      component="select"
                      initialValue={addInputList[i].skillVote}
                      value={addInputList[i].skillVote}
                      onChange={(e) => handleChange(e, i, "skillVote")}
                    >
                      <option />
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                    </Field>
                  </div>
                  <div className="">
                    {addInputList.length - 1 === i && (
                      <button
                        type="button"
                        onClick={handleAddInput}
                        className="bg-red-300 rounded-md shadow-md hover:bg-red-200"
                      >
                        add new skill
                      </button>
                    )}
                  </div>
                  <div className="">
                    {addInputList.length !== 1 && (
                      <button
                        type=""
                        onClick={() => handleRemoveSkill(i)}
                        className="bg-red-300 rounded-md shadow-md hover:bg-red-200"
                      >
                        remove skill
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="mt-10">
              <button
                type="submit"
                disabled={submitting}
                className="border rounded-md px-4 py-2 shadow-md bg-gray-200 hover:bg-gray-300"
              >
                Register
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
}

export default SkillsTESTForm;
