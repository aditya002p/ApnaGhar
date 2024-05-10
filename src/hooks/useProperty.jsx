import { useEffect, useState } from "react";

const useProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aditya002p.github.io/ApiData/properties.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  return [properties, loading];
};

export default useProperty;
