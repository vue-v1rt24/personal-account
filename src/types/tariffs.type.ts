// Данные приходящие с сервера
export type TypeTariffsDTO = {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  speed_mbps: number | null;
  created_at: string | null;
};

// Данные используемые в приложении
export type TypeTariffs = {
  id: string;
  name: string;
  desc: string | null;
  price: number | null;
  speed: number | null;
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
