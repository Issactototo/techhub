import uuid from 'uuid/v4';
import {
    HeaderContent, 
    SubHeaderContent,
    TextContent,
    ImageContent,
    CodeContent,
    VideoContent} 
    from "./content";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    console.log("remove")
    console.log(removed)
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
    console.log("droppableSource.index")
    console.log(item.id)
    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    
    
    
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const remove = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    sourceClone.splice(droppableSource.index, 1);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};



function GetComponent ( type, id, data,setData){
    switch(type) {
        case "headerContent":
            return <HeaderContent id={id} setData={setData} data= {data} />
        case "subHeaderContent":
          // code block
            return <SubHeaderContent id={id} setData={setData} data= {data} />
        case "text":
            // code block
            return <TextContent id={id} setData={setData} data= {data} />
        case "image":
          // code block
          return <ImageContent id={id} setData={setData} data= {data} />
        case "code":
            return<CodeContent id={id} setData={setData} data= {data} />
        // code block
        case "video":
            return <VideoContent id={id} setData={setData} data= {data} />
        // code block
        default:
            return <HeaderContent id={id} setData={setData} data= {data} />
          // code block
      }

}

export {reorder,copy,move,remove,GetComponent }