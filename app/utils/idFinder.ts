export const idFinder = <T>(data: T[], path: string): T | undefined => {
  const myId = path.split("-");
  const lastId = parseInt(myId[myId.length - 1]);
  const filteredData = data.filter((project: any) => {
    return project.id === lastId;
  });
  return filteredData.length > 0 ? filteredData[0] : undefined;
};
