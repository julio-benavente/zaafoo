import { useState } from "react";

export type FakeResponse = "idle" | "loading" | "success" | "error";

interface UseFakeRequestProps {
  success?: number;
}

const useFakeRequest = (
  props: UseFakeRequestProps = {}
): [FakeResponse, () => Promise<FakeResponse>] => {
  const { success = 0.9 } = props || {};
  const [fakeRequest, setFakeRequest] = useState<FakeResponse>("idle");

  const request = async () => {
    setFakeRequest("loading");
    const response: FakeResponse = await new Promise((resolve) => {
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
