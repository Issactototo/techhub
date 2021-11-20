import React from "react";
import "./tutorial.css"
import {
    StructuredListWrapper,
    StructuredListHead, 
    StructuredListRow,
    StructuredListCell,
    StructuredListBody,
    Tag
} from "carbon-components-react";
export const TutorialListPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="BackgroundDisplayTemplate">
           <StructuredListWrapper>
            <StructuredListHead>
                <StructuredListRow head>
                <StructuredListCell head>Course</StructuredListCell>
                <StructuredListCell head>Category</StructuredListCell>
                    <StructuredListCell head>About</StructuredListCell>
                    <StructuredListCell head>Author</StructuredListCell>
                </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                <StructuredListRow>
                    <StructuredListCell noWrap>Row 1</StructuredListCell>
                    <StructuredListCell>
                        <Tag type="red" title="Clear Filter"> Red </Tag>
                    </StructuredListCell>
                    <StructuredListCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                    magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                    sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                    vulputate nisl a porttitor interdum.
                    </StructuredListCell>
                    <StructuredListCell>
                    Issac
                    </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                    <StructuredListCell noWrap>Row 2</StructuredListCell>
                    <StructuredListCell>Row 2</StructuredListCell>
                    <StructuredListCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                    magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                    sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                    vulputate nisl a porttitor interdum.
                </StructuredListCell>
                <StructuredListCell>
                    Issac
                    </StructuredListCell>
                </StructuredListRow>
                </StructuredListBody>
            </StructuredListWrapper>
        </div>
    );
}