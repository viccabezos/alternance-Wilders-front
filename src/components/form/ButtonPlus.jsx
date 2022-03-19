import React, { useState } from "react";

function ButtonPlus() {
  const [inputList, setInputList] = useState([
    { skillName: " ", skillVote: " " },
  ]);

  // const [valueSelector, setValueSelector] = useState();

  const handleAddInput = () => {
    setInputList([...inputList, { skillName: " ", skillVote: " " }]);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <div className="App bg-red-300 p-2">
      {inputList.map((x, i) => {
        return (
          <div>
            <div className="flex gap-5">
              <label htmlFor="">skill name</label>
              <input
                name="skillName"
                value={x.skillName}
                placeholder="Node.js "
              />
              <label htmlFor="">skill Vote</label>

              <select
                name="skillvote"
                id=""
                defaultValue={1}
                // value={VoteSelector}
                // onChange={this.handleChangeValueSelector}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove -
                  </button>
                )}
              </div>
            </div>
            <div>
              {inputList.length - 1 === i && (
                <button onClick={handleAddInput}>Add +</button>
              )}
            </div>
          </div>
        );
      })}
      {/* to delete */}
      <div className="mt-20">{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default ButtonPlus;
