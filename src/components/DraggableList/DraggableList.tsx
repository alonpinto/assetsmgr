import {
  Direction,
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  OnDragEndResponder,
} from "react-beautiful-dnd";

interface DraggableListProps<T> {
  droppableId: string;
  data: T[];
  onDragEnd: OnDragEndResponder;
  renderItem: (item: T, provided: DraggableProvided) => JSX.Element;
  renderWrapper: (
    children: JSX.Element,
    providedMain: DroppableProvided
  ) => JSX.Element;
  direction?: Direction;
}

export const DraggableList = <T extends { id: string }>({
  droppableId,
  data,
  onDragEnd,
  renderItem,
  renderWrapper,
  direction,
}: DraggableListProps<T>) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId={droppableId} direction={direction}>
      {(providedMain) =>
        renderWrapper(
          <>
            {data.map((item, index) => (
              <Draggable key={item.id} index={index} draggableId={item.id}>
                {(provided) => renderItem(item, provided)}
              </Draggable>
            ))}

            {providedMain.placeholder}
          </>,
          providedMain
        )
      }
    </Droppable>
  </DragDropContext>
);
