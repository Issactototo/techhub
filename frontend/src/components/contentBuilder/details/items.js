
import uuid from 'uuid/v4';



const nullData="";
export const ITEMS = [

    {
        id: uuid(),
        type: "header",
        title: 'Header',
        data: nullData
    },
    {
        id: uuid(),
        type: "subHeader",
        title: 'SubHeader',
        data: nullData,
    },
    {
        id: uuid(),
        type: "text",
        title: 'Text',
        data: nullData,
    },
    
    {
        id: uuid(),
        type: "image",
        title: 'Image',
        data: nullData,
    },
    {
        id: uuid(),
        type: "code",
        title: 'Code',
        data: nullData,
    },
    {
        id: uuid(),
        type: "video",
        title: 'Video',
        data: nullData,
    }
];