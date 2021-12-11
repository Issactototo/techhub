import { Select, SelectItem, SelectItemGroup } from "carbon-components-react";

export const CategorySelectBar = ({setLevel, setButtonLevel}) => {
  return (
    <Select
      defaultValue="placeholder-item"
      helperText="Optional helper text"
      id="select-1"
      labelText="Select"
      onChange=
      {
        event => 
        {
            console.log(event.target.value)
            setLevel(event.target.value)
            if(event.target.value!=="all"){
              setButtonLevel(event.target.value)
            }
        }   
      }
    >
      <SelectItemGroup label="ALl">
        <SelectItem text="All" value="all" />
      </SelectItemGroup>
      <SelectItemGroup label="Levels">
        <SelectItem text="Beginner" value="Beginner" />
        <SelectItem text="Intermediate" value="Intermediate" />
        <SelectItem text="Advanced" value="Advanced" />
      </SelectItemGroup>
    </Select>
  );
}
