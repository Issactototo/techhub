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
        type: "header",
        title: 'Header',
        data: HeaderData
    },
    {
        id: uuid(),
        type: "subHeader",
        title: 'SubHeader',
        data: HeaderData,
    },
    {
        id: uuid(),
        type: "text",
        title: 'Text',
        data: HeaderData,
    },
    
    {
        id: uuid(),
        type: "image",
        title: 'Image',
        data: HeaderData,
    },
    {
        id: uuid(),
        type: "code",
        title: 'Code',
        data: HeaderData,
    },
    {
        id: uuid(),
        type: "video",
        title: 'Video',
        data: HeaderData,
    }
];