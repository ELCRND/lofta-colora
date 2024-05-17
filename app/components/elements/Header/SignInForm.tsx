import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../modules/Header/Header";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { setUserIsRegister, setModalActive } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onLogin: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("/api/users/signin", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.status === 400) {
        toast((await res.json()).warningMessage);
      } else if (res.status === 200) {
        toast("Вход успешно выполнен");
        setModalActive(false);
      }
    } catch (error) {
      throw new Error(error as string).message;
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      id="authForm"
      onSubmit={handleSubmit(onLogin)}
      className="mt-10 flex flex-col gap-3 items-center"
    >
      <label className="w-full flex flex-col relative before:w-5 before:h-6 before:absolute before:top-1/2 before:left-2 before:bg-[url('/header/tel_icon.svg')] before:bg-contain before:bg-center before:bg-no-repeat">
        <span>Почта</span>
        <input
          {...register("email", { required: true })}
          type="email"
          className="h-12 pl-8 border border-white rounded-md bg-transparent"
        />
      </label>
      {errors.email && <span>This field is required</span>}
      <label className="w-full flex flex-col relative before:w-5 before:h-6 before:absolute before:top-1/2 before:left-2 before:bg-[url('/header/password_icon.svg')] before:bg-contain before:bg-center before:bg-no-repeat">
        <span>Пароль</span>
        <input
          {...register("password", { required: true })}
          type="password"
          className="h-12 pl-8 border border-white rounded-md bg-transparent "
        />
      </label>
      {errors.password && <span>This field is required</span>}

      <button type="button" onClick={() => setUserIsRegister(false)}>
        Создать аккаунт
      </button>

      <button
        disabled={loading}
        className="w-full mt-10 py-2 px-4 bg-[#d9d9d9] rounded-md text-2xl text-[#080808] font-semibold"
      >
        {loading ? "Подождите" : "Войти"}
      </button>
    </form>
  );
};

export default SignInForm;
