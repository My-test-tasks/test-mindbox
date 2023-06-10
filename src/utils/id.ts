const startId = () => {
  let id = 0;

  return () => {
    return id++;
  };
};

export const nextId = startId();
