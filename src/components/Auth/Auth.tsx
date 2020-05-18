import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [authState, setAuthState] = useState("sign-in");
  return (
    <div>
      {authState === "sign-in" && <SignIn setAuthState={setAuthState} />}

      {authState === "sign-up" && <SignUp setAuthState={setAuthState} />}
    </div>
  );
};

export default Auth;
