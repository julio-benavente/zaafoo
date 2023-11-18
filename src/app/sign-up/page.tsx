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
      <section className="container bg-yellow-50 min-h-screen relative z-0 overflow-hidden">
        <MeshBackgroundDecoration />
        <div>
          <div>
            <Typography className="font-black mb-12">Zaafoo</Typography>
            <div className="md:max-w-sm lg:max-w-lg">
              <div className="mb-12">
                <Typography variant="h1">Sign up</Typography>
                <Typography
                  variant="caption"
                  className="text-gray-600 max-w-[180px] md:max-w-none"
                >
                  Before we start, please enter your current location
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

                <InputContainer>
                  <InputLabel htmlFor="repeat-password">
                    Repeat password
                  </InputLabel>
                  <PasswordInput
                    name="repeat-password"
                    placeholder="Repeat your password"
                  />
                </InputContainer>

                <div className="flex flex-col gap-y-4">
                  <InputContainer>
                    <Checkbox
                      labelProps={{ label: "I agree to receive email updates" }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Checkbox
                      labelProps={{
                        label: (
                          <>
                            I have read and agree to{" "}
                            <Typography variant="link">
                              <Link href="#">Terms of Service</Link>
                            </Typography>
                          </>
                        ),
                      }}
                    />
                  </InputContainer>
                </div>

                <Button fullWidth>Create account</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
