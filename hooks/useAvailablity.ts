import { useState } from "react";
import axios from "axios";

const useAvailability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<
    { time: string; available: boolean }[] | null
  >(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    console.log({
      slug,
      day,
      time,
      partySize,
    });

    setLoading(true);

    try {
      const response = await axios.get(
        `/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`
      );
      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, data, fetchAvailabilities };
};

export default useAvailability;
