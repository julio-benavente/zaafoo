import { useState } from "react";

type Response = "idle" | "loading" | "success" | "error";

interface UseFakeRequestProps {
  success?: number;
}

const useFakeRequest = (
  props: UseFakeRequestProps = {}
): [Response, () => Promise<Response>] => {
  const { success = 0.9 } = props || {};
  const [fakeRequest, setFakeRequest] = useState<Response>("idle");

  const request = async () => {
    setFakeRequest("loading");
    const response: Response = await new Promise((resolve) => {
      const response = Math.random() < success ? "success" : "error";
      setTimeout(() => {
        setFakeRequest(response);
        resolve(response);
      }, 1500);
    });

    return response;
  };

  return [fakeRequest, request];
};

export default useFakeRequest;
