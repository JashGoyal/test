import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Tncbox,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Your Email*" required />
        <Input type="password" placeholder="Your Password*" required />
        <Input type="password" placeholder="Confirm Password*" required />
      </FormContainer>
      <Tncbox>
        <input type="checkbox" id="top" />I agree to the Terms Of Services
      </Tncbox>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">
        <a href="/view">SignUp</a>
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
