export const initialData: DataState = {
    BACKLOG: {
      items: [
        {
          itemId: 1,
          itemDescription: "A small, green and reliable table lamp",
          itemName: "Green Lamp",
          itemTags: ["green", "lamp"],
          status: "BACKLOG",
        },
        {
          itemId: 2,
          itemDescription: "A small, green and reliable office chair",
          itemName: "Green Chair",
          itemTags: ["green", "chair"],
          status: "BACKLOG",
        },
        {
          itemId: 3,
          itemDescription: "A small, green and reliable table",
          itemName: "Green Table",
          itemTags: ["green", "table"],
          status: "BACKLOG",
        },
        {
          itemId: 4,
          itemDescription: "A small, green and reliable laptop. A new edition!",
          itemName: "Green Laptop",
          itemTags: ["green", "laptop"],
          status: "BACKLOG",
        },
      ],
    },
    COMPLETED: {
      items: [
        {
          itemId: 10,
          itemDescription: "A small, Orange and reliable office chair",
          itemName: "Orange Chair",
          itemTags: ["orange", "chair"],
          status: "COMPLETED",
        },
        {
          itemId: 11,
          itemDescription: "A small, Red and reliable office chair",
          itemName: "Red Chair",
          itemTags: ["Red", "chair"],
          status: "COMPLETED",
        },
        {
          itemId: 12,
          itemDescription: "A small, Blue and reliable office chair",
          itemName: "Blue Chair",
          itemTags: ["blue", "chair"],
          status: "COMPLETED",
        },
      ],
    },
    IN_PROGRESS: {
      items: [
        {
          itemId: 13,
          itemDescription: "A widescreen monitor, suitable for office workers",
          itemName: "30 inch monitor",
          itemTags: ["monitor", "office"],
          status: "IN_PROGRESS",
        },
      ],
    },
  }