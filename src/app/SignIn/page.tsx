import {
  Button,
  Checkbox,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
} from "@/components";
import React, { ReactNode } from "react";
import Email from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PasswordVisibilityAdornment from "./PasswordInput";
import PasswordInput from "./PasswordInput";
import { Typography } from "@/components";

const SignInPage = () => {
  return (
    <main>
      <section>
        <div>
          <div>
            <p>Logo</p>

            <div className="max-w-sm">
              <div className="mb-12">
                <Typography variant="h1">Sign in</Typography>
                <Typography variant="caption" className="text-gray-600">
                  Enter your account details
                </Typography>
              </div>

              <div className="grid gap-y-6">
                <InputContainer>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <TextField
                    name="name"
                    type="email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
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

              <p>
                You don't have an account <a href="#">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;

export const InputContainer = ({ children }: { children: ReactNode }) => {
  return <div className="w-full grid gap-y-2 relative">{children}</div>;
};
