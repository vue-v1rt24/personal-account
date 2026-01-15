const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
  maximumFractionDigits: 0,
});

export const priceFormatUtil = (price: number) => {
  return formatter.format(price);
};
