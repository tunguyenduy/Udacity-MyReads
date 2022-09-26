import React, {useState} from "react";

function Options(props) {
  const { onUpdate, bookNo, shelfChange} = props;
  const [value, setValue] = useState(shelfChange.shelf);
  
  return (
    <div className="book-shelf-changer">
      <select
        value={value}
        onChange={(e) => {
          setValue(value);
          onUpdate({
            shelf: e.target.value,
            id: bookNo,
          });
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option hidden>0</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default Options;
