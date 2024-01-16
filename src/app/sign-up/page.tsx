"use client";

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
import useFakeRequest from "@/helpers/fakeRequest";
import NextLink from "next/link";
import { useController, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import errorSnackbar from "@/helpers/errorSnackbar";

interface FormProps {
  email: string;
  password: string;
  repeatPassword: string;
  emailUpdates: boolean;
  termsAndConditions: boolean;
}

const formDefaultValues: FormProps = {
  email: "email@email.com",
  password: "password1234",
  repeatPassword: "password1234",
  emailUpdates: false,
  termsAndConditions: true,
};

const SignInPage = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: formDefaultValues,
  });

  const { field: emailFormProps } = useController({
    control,
    name: "email",
    rules: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minLength: 3,
      maxLength: 120,
    },
  });

  const { field: passwordFormProps } = useController({
    control,
    name: "password",
    rules: {
      required: true,
      minLength: 8,
      maxLength: 64,
    },
  });

  const { field: repeatPasswordFormProps } = useController({
    control,
    name: "repeatPassword",
    rules: {
      required: true,
      minLength: 8,
      maxLength: 64,
    },
  });

  const { field: emailUpdatesFormProps } = useController({
    control,
    name: "emailUpdates",
  });

  const { field: termsAndConditionsFormProps } = useController({
    control,
    name: "termsAndConditions",
    rules: {
      required: true,
    },
  });

  const router = useRouter();
  const [fakeResponse, fakeRequest] = useFakeRequest();

  const submitForm = async (data: FormProps) => {
    const response = await fakeRequest();

    if (response === "success") {
      router.push("/application/menu");
    } else {
      errorSnackbar("An error occured. Try again.");
    }
  };

  // console.log(getValues());
  // console.log(getValues().termsAndConditions);

  return (
    <main className="bg-yellow-50">
      <section className="container min-h-screen relative z-0 overflow-hidden">
        <MeshBackgroundDecoration />
        <div>
          <div>
            <NextLink href="/" className="">
              <Typography className="font-black mb-12">Zaafoo</Typography>
            </NextLink>
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
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid gap-y-6 mb-4">
                  <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <EmailInput {...emailFormProps} disabled={isSubmitting} />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <PasswordInput
                      {...passwordFormProps}
                      disabled={isSubmitting}
                    />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel htmlFor="repeat-password">
                      Repeat password
                    </InputLabel>
                    <PasswordInput
                      placeholder="Repeat your password"
                      {...repeatPasswordFormProps}
                      disabled={isSubmitting}
                    />
                  </InputContainer>

                  <div className="flex flex-col gap-y-4">
                    <InputContainer>
                      <Checkbox
                        labelProps={{
                          label: "I agree to receive email updates",
                          ...emailUpdatesFormProps,
                          disabled: isSubmitting,
                        }}
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
                          ...termsAndConditionsFormProps,
                          disabled: isSubmitting,
                        }}
                      />
                    </InputContainer>
                  </div>

                  <Button fullWidth type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating" : "Create account"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
