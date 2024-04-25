import { Input } from "antd";
import { SearchSVG } from "../../assets/icons/svg-icons";
import {Wrapper } from "./styles";
const { Search } = Input;


const SearchPatient = ({ value, onChange }) => {
  return (
    <>
      <Wrapper>
        <Search
          placeholder="Search Course"
          onChange={onChange}
          className={"search-component"}
          suffix={<SearchSVG />}
          value={value}
        />
      </Wrapper>
    </>
  );
};

export default SearchPatient;
