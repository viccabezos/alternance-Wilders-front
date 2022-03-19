import { Form, Field } from "react-final-form";
import { wildersRequest } from "../../API/requests";

const onSubmit = async (values) => {
  console.log(JSON.stringify(values, 0, 2));
  wildersRequest.create(values).then((res) => {
    console.log(res);
  });
};

const required = (value) => (value ? undefined : "Required");

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit}>
        <Field name="name" validate={required}>
          {({ input, meta }) => (
            <div>
              <label>Name</label>
              <input {...input} type="text" placeholder="Tom" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="city" validate={required}>
          {({ input, meta }) => (
            <div>
              <label>City</label>
              <input {...input} type="text" placeholder="Toronto" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="description" validate={required}>
          {({ input, meta }) => (
            <div>
              <label>Description</label>
              <input {...input} type="text" placeholder="lorem ipsum " />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        {/* <Field name="skill name" validate={required}>
          {({ input, meta }) => (
            <div>
              <label>Skill name</label>
              <input {...input} type="text" placeholder="Hello" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field
          name="skill votes"
          validate={composeValidators(required, mustBeNumber)}
        >
          {({ input, meta }) => (
            <div>
              <label>Skill Votes</label>
              <input {...input} type="text" placeholder="5" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field> */}
        <div>
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
);

export default MyForm;
