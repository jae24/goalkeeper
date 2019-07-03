import Moment from 'moment';

export const dateConverter = (dateString) => {
  return Moment(dateString).format('MMMM Do, YYYY');
}

export const calculateDaysRemaining = (endDate) => {
  let differenceInDaysInMs = Date.parse(endDate) - Date.now();
  let differenceInDays = differenceInDaysInMs / (1000*60*60*24);
  return Math.ceil(differenceInDays);
}
