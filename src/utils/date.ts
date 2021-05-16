import moment from 'moment';

export const validDate = (date: string) => moment(date, moment.ISO_8601, true).isValid();

export const formatDate = (date: string) => moment(date).format('lll');
