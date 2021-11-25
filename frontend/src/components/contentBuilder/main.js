import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { 
    DragDropContext, 
    Droppable, 
    Draggable, } from 'react-beautiful-dnd';
import Sidebar from './sidebar';
import {Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbSkeleton } from 'carbon-components-react';
import {
    Container,
    Content, 
    Item, 
    Handle ,
    reorder,
    copy,
    move,
    remove
} from "./details";
import "./contentBuilder.css";
import { ITEMS } from "./details";
import {RowDelete16} from "@carbon/icons-react";
// import console = require('console');




export class MainContentBuilder extends Component {
    
    constructor(props) {
        super(props)
    }
    state = {
        [uuid()]: []
    };


//   handleDelete = (itemId,itemName) => {
//     const items = this.state[itemName].filter(item => item !== itemId);
//     console.log("itemName")
//     console.log(itemName)
//     this.setState({ itemName: items });
//   };


    onDragEnd = result => {
        const { source, destination } = result;

        console.log('==> result', result);

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                this.setState({
                    [destination.droppableId]: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    [destination.droppableId]: copy(
                        ITEMS,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    addList = e => {
        this.setState({ [uuid()]: [] });
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="main">
                    <Breadcrumb>
                            {
                                this.props.prefixes.map((prefix)=>{
                                    const x = prefix;
                                    return (<BreadcrumbItem href="#">{x}</BreadcrumbItem>)
                                })
                            }
                    </Breadcrumb>
                    <div>
                    <Content>
                        <br/>
                        {Object.keys(this.state).map((list, i) => {
                            console.log('==> list', list);
                            return (
                                <Droppable key={list} droppableId={list}>
                                    {(provided, snapshot) => (
                                        <Container
                                            ref={provided.innerRef}
                                            isDraggingOver={
                                                snapshot.isDraggingOver
                                            }>
                                            {this.state[list].length &&  Array.isArray(this.state[list])
                                                ? (console.log("HALLOWorld"),
                                                    console.log(this.state[list]),
                                                    console.log(this.state[list].length ),
                                                    this.state[list].map(
                                                    (item, index) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(
                                                                provided,
                                                                snapshot
                                                            ) => (
                                                                <Item
                                                                    ref={
                                                                        provided.innerRef
                                                                    }
                                                                    {...provided.draggableProps}
                                                                    isDragging={
                                                                        snapshot.isDragging
                                                                    }
                                                                    style={
                                                                        provided
                                                                            .draggableProps
                                                                            .style
                                                                    }>
                                                                    <Handle
                                                                        {...provided.dragHandleProps}>
                                                                        <svg
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24">
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                                                            />
                                                                        </svg>
                                                                    </Handle>
                                                                    <div style={{display:"flex", flexDirection:"row",  width:"100%"}}>
                                                                        {item.content}
                                                                        
                                                                    </div>
                                                                    <>
                                                                    <RowDelete16
                                                                        onClick={()=>{
                                                                            // console.log("list");
                                                                            // console.log(item.id);
                                                                            // console.log(this.state[list]);
                                                                            
                                                                            for( let x in this.state[list]){
                                                                                if(this.state[list][x].id===item.id){
                                                                                    // const newItems = [...this.state[list]];
                                                                                    // console.log("this.state.list")
                                                                                    // console.log(this.state[list])
                                                                                    var array = [...this.state[list]]
                                                                                    console.log(array)
                                                                                    array.splice(x,1);
                                                                                    console.log("LAST")
                                                                                    console.log(array)
                                                                                    this.setState({[list]:array});
                                                                                    // this.state[list]= y;
                                                                                    // console.log(this.state[list])
                                                                                    // console.log("LAST")
                                                                                    // console.log( list)
                                                                                    break;
                                                                                }
                                                                                
                                                                            }
                                                                            

                                                                            

                                                                            }
                                                                        }
                                                                    />
                                                                    </>
                                                                </Item>
                                                                
                                                            )}
                                                        </Draggable>
                                                    ))
                                                )
                                                : !provided.placeholder && (
                                                    <div>Drop items here</div>
                                                )}
                                            {provided.placeholder}
                                        </Container>
                                    )}
                                </Droppable>
                            );
                        })}
                    </Content>
                    </div>
                    <div>
                    <Sidebar />
                    </div>
                    </div>
                </DragDropContext>
            
        );
    }
}

// Put the things into the DOM!