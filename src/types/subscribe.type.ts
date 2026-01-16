export type TypeSubscribeDTO = {
  id: string;
  user_id: string;
  tariff_id: string;
  status: string;
  created_at: string;
  tariffs: {
    id: string;
    name: string;
    price: number;
    created_at: string;
    speed_mbps: number;
    description?: string;
  };
};

export type TypeSubscribe = {
  id: string;
  name: string;
  price: number;
  speed: number;
  subscribeAt: string;
};

export const subscribeMapDTO = (dto: TypeSubscribeDTO): TypeSubscribe => {
  return {
    id: dto.id,
    name: dto.tariffs.name,
    price: dto.tariffs.price,
    speed: dto.tariffs.speed_mbps,
    subscribeAt: dto.created_at,
  };
};
