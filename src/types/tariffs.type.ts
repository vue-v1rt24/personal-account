// Данные приходящие с сервера
export type TypeTariffsDTO = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  speed_mbps?: number;
  created_at?: string;
};

// Данные используемые в приложении
export type TypeTariffs = {
  id: string;
  name: string;
  desc?: string;
  price?: number;
  speed?: number;
};

// Функция преобразования данных
export const tariffMapDTO = ({
  id,
  name,
  description,
  price,
  speed_mbps,
}: TypeTariffsDTO): TypeTariffs => {
  return {
    id,
    name,
    desc: description,
    price,
    speed: speed_mbps,
  };
};
