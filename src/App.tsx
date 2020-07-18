import React, { useState } from 'react';
import { initialData } from 'data';
import { DropResult, ResponderProvided } from 'react-beautiful-dnd';

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
   <div>
    </div>
  );
}

export default App;
