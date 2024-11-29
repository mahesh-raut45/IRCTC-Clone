import { useState } from "react";
// import _ from "lodash";
import { useDebounce } from "../Hooks/useDebounce";

const SearchComp = () => {
  const [search, setSearch] = useState("");

  const api = useDebounce((val) => {
    console.log(val);
  }, 300);

  const handleChange = (e) => {
    api(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <input value={search} onChange={handleChange} />
    </div>
  );
};

export { SearchComp };
