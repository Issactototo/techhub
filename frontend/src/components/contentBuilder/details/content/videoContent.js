import {RowDelete16} from "@carbon/icons-react";
import { CodeSnippet, Tile,TextInput } from 'carbon-components-react';

export const VideoContent =()=>{
    return(
        <div className="externalContentBox">
            <Tile 
                className="imageContent"
            >
                <TextInput
                    helperText="Insert Youtube link"
                    placeholder="www.youtube.com/..."
                />
            </Tile>
            {//<RowDelete16/>
}
        </div>
    )
}