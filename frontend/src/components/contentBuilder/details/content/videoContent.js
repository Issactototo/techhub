import { RowDelete16 } from "@carbon/icons-react";
import { CodeSnippet, Tile, TextInput } from "carbon-components-react";
import { useState, useEffect } from "react";

export const VideoContent = ({ id, data, setData }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (data.get(id) != null) {
      setValue(data.get(id));
    }
  }, []);
  return (
    <div className="externalContentBox">
      <Tile className="imageContent">
        <TextInput
          value={value}
          helperText="Insert Youtube video embed id"
          placeholder="https://www.youtube.com/embed/{EmbedId}"
          onChange={(event) => {
            setValue(event.target.value);
            const tempData = data;
            tempData.set(id, event.target.value);
            setData(tempData);
            console.log(tempData);
          }}
        />
      </Tile>
      {
        // https://www.youtube.com/embed/rokGy0huYEA
      }
    </div>
  );
};
