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

function SkillsForm() {
  const [addInputList, setAddInputList] = useState([
    { skillName: "", skillVote: "" },
  ]);

  const handleAddInput = () => {
    console.log("handle add input");
    setAddInputList((addInputList) => [
      ...addInputList,
      { skillName: "", skillVote: "" },
    ]);
  };

  const handleRemoveSkill = (index) => {
    const list = [...addInputList];
    list.splice(index, 1);
    setAddInputList(list);
  };

  return (
    <div>
      {addInputList.map((x, i) => {
        return (
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex gap-5 ">
                  <Field name="skill name" validate={required}>
                    {({ input, meta }) => (
                      <div className="flex gap-5">
                        <label>Skill name</label>
                        <input
                          {...input}
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
                    <Field name="Votes" component="select" defaultValue={1}>
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
                        onClick={handleRemoveSkill}
                        className="bg-red-300 rounded-md shadow-md hover:bg-red-200"
                      >
                        remove skill
                      </button>
                    )}
                  </div>
                </div>

                {/* <div className="mt-10">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="border rounded-md px-4 py-2 shadow-md bg-gray-200 hover:bg-gray-300"
                  >
                    Register
                  </button>
                </div> */}
              </form>
            )}
          ></Form>
        );
      })}
    </div>
  );
}

export default SkillsForm;
