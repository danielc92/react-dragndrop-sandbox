interface DataState {
    COMPLETED: {
      items: Item[];
    };
    IN_PROGRESS: {
      items: Item[];
    };
    BACKLOG: {
      items: Item[];
    };
    [key: string]: {
      items: Item[];
    };
  }
  
  interface Item {
    itemId: number;
    itemName: string;
    itemDescription: string;
    itemTags: string[];
    status: ItemStatus;
  }
  
  type ItemStatus = "BACKLOG" | "COMPLETED" | "IN_PROGRESS";
  