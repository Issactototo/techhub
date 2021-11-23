import {
    HeaderContent, 
    SubHeaderContent,
    TextContent,
    ImageContent,
    CodeContent,
    VideoContent} 
    from "./content";
import uuid from 'uuid/v4';

export const ITEMS = [

    {
        id: uuid(),
        type: "header",
        title: 'Header',
        content:<HeaderContent/>,
    },
    {
        id: uuid(),
        type: "subHeaderContent",
        title: 'SubHeaderContent',
        content:<SubHeaderContent/>,
    },
    {
        id: uuid(),
        type: "text",
        title: 'Text',
        content:<TextContent/>,
    },
    
    {
        id: uuid(),
        type: "image",
        title: 'Image',
        content:<ImageContent/>,
    },
    {
        id: uuid(),
        type: "code",
        title: 'Code',
        content:<CodeContent/>,
    },
    {
        id: uuid(),
        type: "video",
        title: 'Video',
        content:<VideoContent/>,
    }
];