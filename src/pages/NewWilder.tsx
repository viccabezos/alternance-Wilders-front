import ButtonPlus from "../components/form/ButtonPlus";
import MyForm from "../components/form/Form";
import SkillsTESTForm from "../components/form/FormTest";
import SkillsForm from "../components/form/SkillsForm";
import Form2 from "../components/form2/Form2";

function NewWilder() {
  return (
    <div className="px-20 flex flex-col items-center">
      <p className="mt-20">NEW WILDER FORM</p>

      <div>
        <Form2 />
      </div>

      {/* <div className="mt-10">
        <MyForm />
      </div>
      <div className="mt-20">
        <p>SKILLS FORM</p>
        <SkillsForm />
      </div>
      <div>
        <div className="mt-20">
          BUTTON FORM
          <ButtonPlus />
        </div>
      </div>

      <div>
        <p>TEST</p>
        <SkillsTESTForm />
      </div> */}
    </div>
  );
}

export default NewWilder;
