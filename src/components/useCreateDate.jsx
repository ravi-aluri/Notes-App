
import React from 'react'

const useCreateDate = () => {
  const date=new Date();
  const month=date.getMonth();
  let monthname;
  switch(month){
    case 0: monthname="Jan";
    break;
    case 1: monthname="Feb";
    break;
    case 2: monthname="Mar";
    break;
    case 3: monthname="Apr";
    break;
    case 4: monthname="May";
    break;
    case 5: monthname="June";
    break;
    case 6: monthname="July";
    break;
    case 7: monthname="Aug";
    break;
    case 8: monthname="Sep";
    break;
    case 9: monthname="Oct";
    break;
    case 10: monthname="Nov";
    break;
    case 11: monthname="Dec";
    break;
  }
  const currdate=`${monthname} ${date.getDate()}, ${date.getFullYear()} [${date.getHours()}:${date.getMinutes()}]`
  return currdate;
}

export default useCreateDate