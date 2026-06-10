import axios from "axios";

const API_URL = "http://localhost:8081/api/users";

export const createExternalUserRequest = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/create-request`,
      data,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating request:", error.response?.data || error.message);
    throw error;
  }
};
