import { CodeSnippet, TextArea,FileUploader } from 'carbon-components-react';
import {RowDelete16} from "@carbon/icons-react";

export const TextContent =()=>{
    return(
        <div className="textContentBox">
            <TextArea
                labelText="Text area label"
                placeholder=""
                helperText="Text Box"
                className="textContent"
            />
        </div>
    )
}