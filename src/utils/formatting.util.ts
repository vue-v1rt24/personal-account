const formatterPrice = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
  maximumFractionDigits: 0,
});

// Цена
export const priceFormat = (price: number) => {
  return formatterPrice.format(price);
};

// Дата
const formatterDate = new Intl.DateTimeFormat('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
});

export const dateFormat = (val: string) => {
  return formatterDate.format(new Date(val));
};
