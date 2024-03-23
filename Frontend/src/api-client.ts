import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIN";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
export const register = async (formData: RegisterFormData) => {
  console.log("API base url: ", API_BASE_URL);
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  try {
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to register user");
    }
    const responseBody = await response.text();
    if (!responseBody.trim()) {
      throw new Error("Empty response body");
    }

    const jsonData = JSON.parse(responseBody);

    return jsonData;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; 
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/validate`, {
    method: "GET",
    credentials: "include",
  });
  if(!response.ok)
  {
    throw new Error("Token Invalid");
  }
  return response.json();
}

export const SignOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};