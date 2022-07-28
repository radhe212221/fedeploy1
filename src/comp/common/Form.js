import React from "react";
import { useForm } from "react-hook-form";

export default function App({ schema, children, onsubmit, ...props }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => onsubmit(data);
  const handleChange = (key) => {
    if (["board", "className", "medium", "subject"].includes(key)) {
      props.onChange({
        name: key,
        value: watch(key),
      });
    }
  };
  return (
    <form
      className={`needs-validation was-validated`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {schema.map((x, i) => (
        <div key={i} className="mb-1 input-group has-validation">
          <input
            {...x}
            {...register(x.name, { required: true })}
            className="form-control mb-1"
            required={true}
            autoComplete="off"
            onBlur={(e) => handleChange(x.name)}
          />
          {/* <div className="badge rounded-pill bg-danger">{errors[x.name] && <span>{x.name} required</span>}</div> */}
        </div>
      ))}
      <div className="d-grid  ">
        <button className="btn btn-block btn-primary">{children}</button>
      </div>
    </form>
  );
}
