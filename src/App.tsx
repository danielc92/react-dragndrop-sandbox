import React, { useState } from 'react';
import { initialData } from 'data';
import { DropResult, ResponderProvided, Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';

function App() {
  const [data, setData] = useState<DataState>(initialData);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // Wasnt dropped on column
    if (!result.destination) return;

    const { source, destination } = result;
    // Was dropped in a variant column
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = data[source.droppableId];
      const destColumn = data[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setData({
        ...data,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      // The droppableId match -> reordered in same column
      const column = data[source.droppableId];
      const items = [...column.items];
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);
      setData({
        ...data,
        [source.droppableId]: {
          ...column,
          items,
        },
      });
    }
  };

  return (
    <div style={STYLES.CONTAINER}>
    <h1>Dans Drag n' Drop</h1>
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex" }}>
        {Object.entries(data).map((item) => (
          <Droppable direction="vertical" droppableId={item[0]}>
            {(provided, snapshot) => {
              const computedCardStyle =
                item[0] === "BACKLOG"
                  ? STYLES.CARD_BACKLOG
                  : item[0] === "COMPLETED"
                  ? STYLES.CARD_COMPLETE
                  : STYLES.CARD_IN_PROGRESS;
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={STYLES.COLUMN}
                >
                  <h2>{item[0]}</h2>
                  {data[item[0]].items.map((x, index) => (
                    <Draggable
                      key={x.itemId}
                      draggableId={x.itemId.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...computedCardStyle,
                            ...provided.draggableProps.style,
                          }}
                        >
                          <h3 style={STYLES.CARD_HEADER}>
                            {" "}
                            {x.itemName} {x.itemId}
                          </h3>
                          <p style={STYLES.CARD_DESC}>{x.itemDescription}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              );
            }}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  </div>
  );
}

export default App;
