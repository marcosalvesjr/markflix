import { useForm } from "react-hook-form";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

type FormInputs = {
  name: string;
};

const Navbar = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };
  return (
    <div>
      <h2>
        <BiCameraMovie />
        <Link to={"/"}>
          Mark<span>flix</span>
        </Link>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Busque um filme"
        />
        <button>
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
