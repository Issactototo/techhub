import {RowDelete16} from "@carbon/icons-react";
import { 
    Tile,
    FileUploader,
 } from "carbon-components-react";

export const ImageContent =()=>{
    return(
        <div className="externalContentBox">
            <Tile className="imageContent">

            <FileUploader
                accept={[
                    '.jpg',
                    '.png'
                ]}
                buttonKind="primary"
                buttonLabel="Add files"
                filenameStatus="edit"
                iconDescription="Clear file"
                labelDescription="only .jpg files at 500mb or less"
                labelTitle="Upload"
                 className="imageContent"
                />
            </Tile>
        </div>
    )
}