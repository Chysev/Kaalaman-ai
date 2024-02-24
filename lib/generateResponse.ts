import axios from "axios";

const generateResponse = async (userInput: string) => {
  try {
    const kaalaman3_turbo = "/api/kaalaman3-turbo";
    const kaalaman4_turbo = "/api/kaalaman4-turbo";
    const response = await axios.post(
      kaalaman3_turbo,
      { userInput },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.KaalamanAIResponse;
  } catch (error) {
    console.error("Error Fetching Kaalaman AI Response:", error);
    throw error;
  }
};

export default generateResponse;
