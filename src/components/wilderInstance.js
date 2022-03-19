import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { wildersRequest } from "../requests/wilders";
import { useEffect, useState } from "react";
import { ImCheckmark2, ImCross, ImPlus } from "react-icons/im";
import BackButton from "./BackButton";
import PopInfo from "./PopInfo";
import ModalAddSkill from "./ModalAddSkill";
import { notify } from "react-notify-toast";
const WilderInstance = () => {
  const { wilderId, editing } = useParams();
  const navigate = useNavigate();
  const [wilderData, setWilderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const {
    control,
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const { fields, append, update } = useFieldArray({
    control,
    name: "skills",
  });

  useEffect(() => {
    const findWilder = async () => {
      const wilder = await wildersRequest.find(wilderId);
      !wilder.data.success && navigate("/404");

      setLoading(false);
      setWilderData(wilder.data.result);
    };

    if (editing !== "0") {
      findWilder();
    } else {
      setLoading(false);
    }
  }, [navigate, wilderId, editing]);

  useEffect(() => {
    const { name, city } = wilderData;
    setValue("name", name);
    setValue("city", city);
    wilderData.skills?.map((skill) => {
      return !fields.find((e) => e._id === skill._id) && append(skill);
    });
  }, [wilderData, append, fields, setValue]);

  const onSubmit = async (data) => {
    let updateWilder;
    if (editing !== "0") {
      updateWilder = await wildersRequest.update({ _id: wilderId, ...data });
    } else {
      updateWilder = await wildersRequest.create(data);
    }
    if (updateWilder.data.success) {
      if (editing !== "0") {
        notify.show("Wilder édité avec succès!");
      } else {
        notify.show("Le wilder a été créé avec succès!");
        navigate(`/wilder/instance/1/${updateWilder.data.result._id}`);
      }
    } else {
      notify.show(`Une erreur s'est produite : ${updateWilder.data.result}`);
    }
  };
  const removeSkill = (skillId) => {
    setWilderData((wilderData) => {
      let newSkillsList = wilderData.skills.filter((e) => e._id !== skillId);
      setValue("skills", newSkillsList);
      return { ...wilderData, skills: newSkillsList };
    });
  };
  const addSkill = (skill) => {
    delete skill["_id"];
    let index = fields.findIndex((e) => e.title === skill.title);
    index !== -1 ? update(index, skill) : append(skill);
    toggleModal();
  };
  loading && <PopInfo message="Récupération des données en cours" />;

  return (
    <div className="sm:w-full md:w-96 p-8 mx-auto">
      <BackButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nom du wilder
          </label>
          <input
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.name && (
            <span className="text-wildcolor font-medium">
              Ce champs est obligatoire!
            </span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ville du Wilder
          </label>
          <input
            type="text"
            {...register("city")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="skills-list"
            className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 justify-between"
          >
            Skills du Wilder
            <button
              onClick={toggleModal}
              type="button"
              className=" w-8 h-8 flex items-center  o-underline rounded-full p-2 text-white bg-wildcolor"
            >
              <ImPlus className="text-xl" />
            </button>
          </label>
          <div
            name="skills-list"
            className="flex flex-row flex-wrap overflow-auto max-h-64"
          >
            {fields.length ? (
              fields.map((field, index) => (
                <div
                  className="flex flex-wrap justify-center space-x-2 mr-2"
                  key={index}
                  onClick={() => removeSkill(field._id)}
                >
                  <span className="px-4 py-2 rounded-full text-gray-500 border border-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                    {field.title}
                    <button
                      type="button"
                      {...register(`skills.${index}.title`)}
                      className="bg-transparent hover focus:outline-none"
                    >
                      <ImCross className="ml-2" />
                    </button>
                  </span>
                </div>
              ))
            ) : (
              <PopInfo
                className="mx-auto"
                message="Aucun skills pour ce wilder"
              />
            )}
          </div>
        </div>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-4 px-4 rounded inline-flex items-center w-full justify-center"
          type="submit"
        >
          <ImCheckmark2 className="mr-2" /> Valider
        </button>
      </form>
      {modal && <ModalAddSkill addSkill={addSkill} toggleModal={toggleModal} />}
    </div>
  );
};

export default WilderInstance;
