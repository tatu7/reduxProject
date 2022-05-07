const songListRerucer = (
  history = [
    {
      name: "Uzbek",
      time: "3:12",
      author: "Uzim",
    },
  ],
  data
) => {
  if (data.type === "ADD") {
    return (history = [...history, data.payload]);
  }
  return history;
};
export default songListRerucer;
