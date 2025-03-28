import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdEyeOff, IoMdInformationCircle } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loginIdError, setLoginIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const [isPassVisible, setIsPassVisible] = useState(false);
  return (
    <>
      <div className="flex min-h-[80vh] justify-center items-center w-[35%]">
        <div className="flex justify-center items-center bg-gradient-to-b from-[#ffffff] to-[#bbbde4] h-[95%] mt-7  w-full mr-[20px] rounded-2xl">
          <form
            className="flex flex-col gap-y-3 w-[75%]"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* Login ID */}
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="loginId"
                className="ml-1 w-max text-sm font-semibold opacity-80"
              >
                Login ID
              </label>
              <input
                type="text"
                id="loginId"
                value={loginId}
                onChange={(e) => validateLoginId(e)}
                className={`border ${
                  loginId.length < 4
                    ? "border-gray-400"
                    : loginIdError.includes("correct") && !isLoginFailed
                    ? "border-green-500 focus-visible:ring-green-100"
                    : "border-red-500 focus-visible:ring-red-100"
                } bg-background ring-offset-background placeholder:text-muted-foreground my-1 flex h-9 w-full rounded-md px-3 py-2 text-base font-medium opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
                placeholder="Enter user ID"
              />
              {!isLoginFailed && (
                <p
                  className={`inline-flex items-center gap-x-1 text-[12px] font-semibold ${
                    loginId
                      ? loginId.length >= 4
                        ? "text-green-600"
                        : "text-red-500"
                      : "text-red-500"
                  } ${loginIdError ? "opacity-100" : "opacity-0"}`}
                >
                  {isSuccess ? <FaCircleCheck /> : <IoMdInformationCircle />}{" "}
                  {loginIdError}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="password"
                className="ml-1 w-max text-sm font-semibold opacity-80"
              >
                Password
              </label>
              {/* Password */}
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    const validation = validatePassword(e.target.value);
                    setPasswordError(validation.message);
                    setIsError(validation.isError);
                    setIsSuccess(validation.isSuccess);
                  }}
                  className={`border ${
                    password.length === 0
                      ? "border-gray-400"
                      : isSuccess && !isLoginFailed
                      ? "border-green-500 focus-visible:ring-green-100"
                      : "border-red-500 focus-visible:ring-red-100"
                  } bg-background ring-offset-background placeholder:text-muted-foreground my-1 flex h-9 w-full rounded-md px-3 py-2 text-base font-medium opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
                  placeholder="Enter password"
                />

                <button
                  type="button"
                  className="absolute right-2 top-2 rounded-md border border-transparent px-2 py-1 text-gray-400 outline-1 hover:cursor-pointer hover:border-gray-100 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? <IoMdEyeOff /> : <IoEye />}
                </button>
              </div>
              {!isLoginFailed && (
                <p
                  className={`inline-flex items-center gap-x-1 text-[12px] font-semibold ${
                    isSuccess ? "text-green-600" : "text-red-500"
                  } ${passwordError ? "opacity-100" : "opacity-0"} `}
                >
                  {isSuccess ? <FaCircleCheck /> : <IoMdInformationCircle />}{" "}
                  {passwordError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 h-10 w-full rounded-md bg-blue-500 font-medium text-white transition-colors duration-200 ease-in hover:bg-blue-600 hover:shadow-xl disabled:bg-blue-300"
              disabled={!loginId || isError}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
