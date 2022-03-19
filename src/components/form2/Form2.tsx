import { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { wildersRequest } from "../../API/requests";
import SkillsForm from "./SkillsForm";
function Form2() {
  // let navigate = useNavigate();

  interface typeFormValues {
    name: string;
    city: string;
    description: string;
    skills: [];
  }

  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm({ mode: "onSubmit" });

  // const { fields, append, remove } = useFieldArray({ control, name: "skills" });
  // const [error, SetError] = useState();
  // const [data, setData] = useState({
  //   name: "",
  //   city: "",
  //   description: "",
  //   skills: [{}],
  // });
  // const onSubmit = async (data: any) => {
  //   const newWilder = {
  //     name: data.name,
  //     city: data.city,
  //     description: data.description,
  //     skills: data.skills,
  //   };
  //   console.log("DATAAAAA", data);
  //   console.log("WILDER TO REGISTER", newWilder);
  //   // navigate("/");
  //   try {
  //     const ResultNewWilder = await wildersRequest.create(newWilder);
  //     console.log("WILDER TO REGISTER", newWilder);

  //     if (ResultNewWilder.data.success) {
  //       console.log("confiramtion registration");
  //     } else {
  //       console.log("error register new wilder", ResultNewWilder.data.result);
  //     }
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };
  // console.log(errors);

  // const onSubmit = async (data) => {
  //   try {
  //     const result = await wildersRequest.create(data);
  //     if (result.data.success) {
  //       SetError(" ");
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       SetError(error.response.data.message);
  //     } else {
  //       SetError(error.message);
  //     }
  //   }
  // };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("DAtA", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <label htmlFor="userName">User Name</label>
          <input placeholder="Bill" {...register("name")} />
        </div>
        <div className="flex gap-5">
          <label htmlFor="city">City</label>
          <input placeholder="Bayonne" {...register("city")} />
        </div>

        <div className="flex gap-5">
          <label htmlFor="description">Description</label>
          <input
            placeholder="j'adore le camembert"
            {...register("description")}
          />
        </div>

        <div className="flex gap-3">
          {fields.map((field, index) => (
            <div key={field.id}>
              <SkillsForm register={register} index={index} />
            </div>
          ))}
          <button type="button" onClick={() => append({})}>
            add skill
          </button>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form2;
