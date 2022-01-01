import React, { Component, useRef } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Sidebar from "./sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  TextInput
} from "carbon-components-react";
import {
  Container,
  Content,
  Item,
  Handle,
  reorder,
  copy,
  move,
  GetComponent,
} from "./details";

import "./contentBuilder.css";
import { ITEMS } from "./details";
import { RowDelete16, Touch_116, Launch16 } from "@carbon/icons-react";
import Cookies from "js-cookie";

// import console = require('console');

export class MainContentBuilder extends Component {
  constructor(props) {
    super(props);
    console.log("this.props.prefixes");
    console.log(this.props.tempEditPath);
  }

  componentDidMount() {
    const cookiesPrevState = Cookies.get("prevState");
    if (cookiesPrevState != null) {
      const cookiesPrevStateJson = JSON.parse(cookiesPrevState);
      const x = [];
      for (let prevComponent of cookiesPrevStateJson) {
        const prevComponentJson = JSON.parse(prevComponent);
        console.log("prevComponentJson");
        console.log(prevComponentJson);
        // var array = [...this.state["Editable"]]
        // array.push(prevComponentJson)
        // this.setState({["Editable"]:array});
        x.push(prevComponentJson);
      }
      this.setState({ ["Editable"]: x });
    }
    // const cookiesPrevStateMap = Cookies.get("prevStateMap");
    // if(cookiesPrevStateMap!=null){
    //     console.log("cgvhbjkl")
    //     console.log(JSON.parse(cookiesPrevStateMap))
    //     const cookiesPrevMapJson = JSON.parse(cookiesPrevStateMap)
    //     const cookiesPrevMap = new Map(Object.entries(cookiesPrevMapJson));
    //     console.log(cookiesPrevMap)
    //     this.props.setData(cookiesPrevMap);
    // }
  }

  state = {
    ["Editable"]: [],
  };

  saveMapState() {
    const ArrayForm = Array.from(this.state["Editable"]);
    console.log(ArrayForm);
    const tempArray = [];
    for (let x of ArrayForm) {
      tempArray.push(JSON.stringify(x));
    }
    Cookies.set("prevState", JSON.stringify(tempArray));
    console.log("XXXXXXXXX");
    const mapJson = Object.fromEntries(this.props.data);
    console.log(this.props.data);
    Cookies.set("prevStateMap", JSON.stringify(mapJson));
    console.log("YYYYYYYYYY");
    // console.log("prevState")
    console.log(Cookies.get("prevStateMap"));
  }

  //   handleDelete = (itemId,itemName) => {
  //     const items = this.state[itemName].filter(item => item !== itemId);
  //     console.log("itemName")
  //     console.log(itemName)
  //     this.setState({ itemName: items });
  //   };

  onDragEnd = (result) => {
    const { source, destination } = result;

    console.log("==> result", result);

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
          ),
        });
        break;
      case "ITEMS":
        this.setState({
          [destination.droppableId]: copy(
            ITEMS,
            this.state[destination.droppableId],
            source,
            destination
          ),
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

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="main">
          <div className= "dndTemplate">
          {console.log(this.props)}
          <div className="topContentBuilderBar">
            <Breadcrumb>
              {this.props.tempEditPath.map((prefix) => {
                const x = prefix;
                return <BreadcrumbItem href="#"><p className="BreadcrumbText">{x}</p></BreadcrumbItem>;
              })}
            </Breadcrumb>
            <div className="topContentBuilderRightBar">
              <Button
                onClick={() => this.saveMapState()}
              >
                Save <Touch_116 />
              </Button>

              <Button
                style={{ marginLeft: "4vh" }}
                onClick={() => {
                  console.log(this.props.data);
                  console.log(this.state);
                  console.log("x.length");
                  const ArrayForm = Array.from(this.state["Editable"]);
                  const mapping = new Map([]);
                  for (let x in ArrayForm) {
                    mapping.set(x, JSON.stringify(ArrayForm[x]));
                  }
                  console.log(mapping);
                  console.log(mapping);
                  this.props.navigateToPreview(this.props.data, mapping);
                }}
              >
                Preview <Launch16 />
              </Button>
            </div>
          </div>
          <div>
          
          </div>
          <div>
            <Content>
              <br />
              {Object.keys(this.state).map((list, i) => {
                console.log("==> list", list);
                return (
                  <Droppable key={list} droppableId={list}>
                    {(provided, snapshot) => (
                      <Container
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                      >
                        {this.state[list].length &&
                        Array.isArray(this.state[list])
                          ? (console.log("HALLOWorld"),
                            console.log(this.state[list]),
                            console.log(this.state[list].length),
                            this.state[list].map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <Item
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    isDragging={snapshot.isDragging}
                                    style={provided.draggableProps.style}
                                  >
                                    <Handle {...provided.dragHandleProps}>
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                        />
                                      </svg>
                                    </Handle>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: "100%",
                                      }}
                                    >
                                      {
                                        (console.log("heheeheheheh"),
                                        console.log(this.props.data),
                                        GetComponent(
                                          item.type,
                                          item.id,
                                          this.props.data,
                                          this.props.setData
                                        ))
                                      }
                                    </div>
                                    <>
                                      <RowDelete16
                                        onClick={() => {
                                          // console.log("list");
                                          // console.log(item.id);
                                          // console.log(this.state[list]);

                                          for (let x in this.state[list]) {
                                            if (
                                              this.state[list][x].id === item.id
                                            ) {
                                              // const newItems = [...this.state[list]];
                                              // console.log("this.state.list")
                                              // console.log(this.state[list])
                                              var array = [...this.state[list]];
                                              array.splice(x, 1);
                                              this.setState({ [list]: array });
                                              if (
                                                this.props.data.get(item.id) !=
                                                null
                                              ) {
                                                const tempData =
                                                  this.props.data;
                                                tempData.set(item.id, "");
                                                this.props.setData(tempData);
                                                console.log("tempData");
                                                console.log(tempData);
                                              }
                                              // this.state[list]= y;
                                              // console.log(this.state[list])
                                              // console.log("LAST")
                                              // console.log( list)
                                              break;
                                            }
                                          }
                                        }}
                                      />
                                    </>
                                  </Item>
                                )}
                              </Draggable>
                            )))
                          : !provided.placeholder && <div>Drop items here</div>}
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
        </div>
      </DragDropContext>
    );
  }
}

// Put the things into the DOM!
