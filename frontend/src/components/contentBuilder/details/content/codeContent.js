import { CodeSnippet, TextArea,FileUploader } from 'carbon-components-react';
import {RowDelete16} from "@carbon/icons-react";

export const CodeContent =()=>{
    return(
        <div className="textContentBox">
            <TextArea
                labelText="Text area label"
                placeholder=""
                helperText="Code Snippet"
                className="textContent"
            />
        </div>
    )
}