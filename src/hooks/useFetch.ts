import { useState } from "react";

export const useFetch = (callback: () => any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError("");
      await callback();
    } catch (error: any) {
      setError(
        ("message" in error && error.message) || "Непредвиденная ошибка"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading, error };
};
