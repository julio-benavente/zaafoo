import {
  Button,
  Checkbox,
  EmailInput,
  InputLabel,
  Link,
  PasswordInput,
} from "@/components";
import { Typography, InputContainer } from "@/components";
import MeshBackgroundDecoration from "@/components/MeshBackgroundDecoration";
import NextLink from "next/link";

const SignInPage = () => {
  return (
    <main className="bg-yellow-50">
      <section className="container min-h-screen overflow-hidden relative z-0">
        <MeshBackgroundDecoration />

        <div>
          <div>
            <NextLink href="/" className="">
              <Typography className="font-black mb-12">Zaafoo</Typography>
            </NextLink>

            <div className="max-w-sm">
              <div className="mb-12">
                <Typography variant="h1">Recover your password</Typography>
                <Typography variant="caption" className="text-gray-600">
                  Enter your email below, you will receive an email with
                  instructions on how to reset your password.
                </Typography>
              </div>

              <div className="grid gap-y-6 mb-4">
                <InputContainer>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <EmailInput />
                </InputContainer>

                <Button fullWidth>Start recovery</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
