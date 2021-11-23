import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { ITEMS, Kiosk, Item, Clone } from "./details";


export default class Sidebar extends Component {
    render() {
        return (
            <Droppable droppableId="ITEMS" isDropDisabled={true}>
                {(provided, snapshot) => (
                    <Kiosk
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}>
                        {ITEMS.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <React.Fragment>
                                        <Item
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            isDragging={snapshot.isDragging}
                                            style={
                                                provided.draggableProps.style
                                            }>
                                            {item.title}
                                        </Item>
                                        {snapshot.isDragging && (
                                            <Clone>{item.title}</Clone>
                                        )}
                                    </React.Fragment>
                                )}
                            </Draggable>
                        ))}
                    </Kiosk>
                )}
            </Droppable>
        );
    }
}
