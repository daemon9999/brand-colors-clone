const convertToDate = (date) => {
  if (date) {
    const updatedDate = date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)[0].split("-");
    const day = +updatedDate[2];
    const month = +updatedDate[1];
    const year = updatedDate[0].slice(2, 4);
    return month.toString() + "/" + day.toString() + "/" + year;
  }
};

export default convertToDate;
