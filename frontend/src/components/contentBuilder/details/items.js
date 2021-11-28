import {
    HeaderContent, 
    SubHeaderContent,
    TextContent,
    ImageContent,
    CodeContent,
    VideoContent} 
    from "./content";
import uuid from 'uuid/v4';



const HeaderData="1324";
export const ITEMS = [

    {
        id: uuid(),
        type: "headerContent",
        title: 'Header',
        data: HeaderData,
        content:<HeaderContent/>,
    },
    {
        id: uuid(),
        type: "subHeaderContent",
        title: 'SubHeaderContent',
        data: HeaderData,
        content:<SubHeaderContent/>,
    },
    {
        id: uuid(),
        type: "text",
        title: 'Text',
        data: HeaderData,
        content:<TextContent/>,
    },
    
    {
        id: uuid(),
        type: "image",
        title: 'Image',
        data: HeaderData,
        content:<ImageContent/>,
    },
    {
        id: uuid(),
        type: "code",
        title: 'Code',
        data: HeaderData,
        content:<CodeContent/>,
    },
    {
        id: uuid(),
        type: "video",
        title: 'Video',
        data: HeaderData,
        content:<VideoContent/>,
    }
];