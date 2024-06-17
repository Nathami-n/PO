import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "../zod/form-schema";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { registerUser } from "../utils/helpers";

const SignUp = () => {
  const [role, setRole] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);
  console.log(role);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data: registerSchemaType) => {
    setIsPending(true)
    try {
      const sendData = {
        form: data,
        role: role
      };
      registerUser(sendData);

    } catch (e: any) {
      console.error(e);

    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="text">
      <div className="px-3 flex md:flex-row flex-col gap-y-5 md:items-center">
        <div className="flex-1 h-full">
          <div className="w-full max-md:max-w-[90%] px-1 max-lg:max-w-[80%] lg:max-w-[75%] mx-auto flex flex-col gap-y-3 justify-center">
            <div className="flex flex-col gap-1 p-1">
              <h1 className="font-bold text-2xl text-darkBlue">Sign Up</h1>
              <p className="text-md">create an account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-3">
                <div className=" ">
                  <input
                    placeholder="Name"
                    disabled={isPending}
                    {...register("name")}
                    className="border-2 bg-user border-transparent bg-no-repeat bg-[top_1rem_right_1.5rem] drop-shadow-md rounded-full p-4 w-full hover:outline-blue-700 focus:outline-blue-700 required"
                  />
                </div>
                <div className="">
                  <input
                    disabled={isPending}
                    placeholder="Email"
                    {...register("email")}
                    className="border-2 bg-mail bg-no-repeat bg-[top_1rem_right_1.5rem] focus:filter border-transparent drop-shadow-md rounded-full p-4 w-full hover:outline-blue-700 focus:outline-blue-700 required"
                  />
                </div>
                <div className="">
                  <input
                    disabled={isPending}
                    placeholder="Password"
                    {...register("password")}
                    className="border-2 bg-pass bg-no-repeat bg-[top_1rem_right_1.5rem] border-transparent drop-shadow-md rounded-full p-4 w-full hover:outline-blue-700 focus:outline-blue-700"
                    required
                  />
                </div>

                {/* Admin or User */}
                <div className="flex items-center">
                  <Select
                    label="Select role"
                    value={role}
                    onChange={(val) => setRole(val)}
                  >
                    <Option value="Admin">Admin</Option>
                    <Option value="User">User</Option>
                  </Select>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className={`bg-customBlue text-white flex items-center justify-center cursor-pointer hover:scale-105 transition-all w-full rounded-full p-4 mt-5`}
                  value="Sign Up"
                >
                  {isPending ? (
                    <div className="flex flex-row-reverse items-center">
                      <Spinner

                        height={24}
                        width={24}
                      />

                    </div>
                  ) : <p>Sign Up</p>}
                </button>

              </div>

              <div className="flex items-center mt-2">
                <div className="bg-[#eff0f6] h-[1px] w-full" />
                <div className="mx-6">Or</div>
                <div className="bg-[#eff0f6] h-[1px] w-full" />
              </div>
              {/* socials */}
              <div className="">
                <button
                  type="button"
                  className="flex items-center  border-2 drop-shadow-sm  w-full rounded-full p-4 gap-x-3 justify-center"
                >
                  <img src="/googlee.svg" />
                  <p>Continue with Google</p>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 h-full w-full bg-[#f3f1ff]">
          <img src="/login.svg" className="w-full h-full" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
