import {
    HeaderDisplay,
    SubHeaderDisplay,
    VideoDisplay,
    ImageDisplay,
    CodeSnippetDisplay,
    TextDisplay
} from "./details"

export function convertData(type,data){
    switch (type){
        case "header":
            return <HeaderDisplay data={data} />;
        case "subHeader":
            return <SubHeaderDisplay data={data} />;
        case "video":
            return <VideoDisplay data={data} />;
        case "image":
            return <ImageDisplay data={data} />;
        case "code":
            return <CodeSnippetDisplay data={data} />;
        case "text":
            return <TextDisplay data={data} />;
        default:
            return <HeaderDisplay data={data} />;
    }
    
}