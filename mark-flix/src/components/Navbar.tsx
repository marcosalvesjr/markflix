import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

type FormInputs = {
  name: string;
};

const Navbar = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [dataForm, setDataForm] = useState<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    setDataForm(data);
  };
  return (
    <div>
      <h2>
        <BiCameraMovie />
        <Link to={"/"}>
          Mark<span>flix</span>
        </Link>
        <Link to={"/movie/1"}>Movie</Link>
        <Link to={"/search"}>Movie</Link>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Busque um filme"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
