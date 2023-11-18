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

const SignInPage = () => {
  return (
    <main>
      <section className="container bg-yellow-50 min-h-screen relative overflow-hidden z-0">
        <MeshBackgroundDecoration />

        <div>
          <div>
            <Typography className="font-black mb-12">Zaafoo</Typography>

            <div className="max-w-sm">
              <div className="mb-12">
                <Typography variant="h1">Sign in</Typography>
                <Typography variant="caption" className="text-gray-600">
                  Enter your account details
                </Typography>
              </div>

              <div className="grid gap-y-6 mb-4">
                <InputContainer>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <EmailInput />
                </InputContainer>

                <InputContainer>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <PasswordInput />
                </InputContainer>

                <div className="flex flex-row">
                  <InputContainer>
                    <Checkbox labelProps={{ label: "Remember me" }} />
                  </InputContainer>
                  <Typography variant="link" className="whitespace-nowrap">
                    <Link>Recover password</Link>
                  </Typography>
                </div>

                <Button fullWidth>Sign in</Button>
              </div>

              <Typography variant="caption">
                You don't have an account?{" "}
                <Typography variant="link">
                  <Link href="#">Create an account</Link>
                </Typography>
                .
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
