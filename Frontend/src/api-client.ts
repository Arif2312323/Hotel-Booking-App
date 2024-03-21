import { RegisterFormData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
export const register = async (formData: RegisterFormData) => {
  console.log("API base url: ", API_BASE_URL);
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
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
