const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'short',
  timeStyle: 'short',
});

export default (date) => dateFormatter.format(date)
