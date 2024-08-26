import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  const searchByName = (e) => {
    if (e.key === "Enter") {
        dispatch({type:"SEARCH_BY_NAME" ,payload:{searchWord}})
    }
  };
  // x 버튼 클릭시 clear
  const clear = () => {
    setSearchWord(""); // 검색어를 빈 값으로 초기화
  };
  return (
    <div>
        <Input
          type="email"
          color="danger"
          variant="faded"
          label="Search by name"
          value={searchWord}
          onClear={clear}
          onChange={(e) => setSearchWord(e.target.value)} // 입력값 상태 업데이트
          onKeyDown={searchByName} // 엔터키 입력 시 검색
          classNames={{
            label: "text-black/50 dark:text-white/90 text-lg",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90 text-lg",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
        />
    </div>
  );
};

export default Search;
