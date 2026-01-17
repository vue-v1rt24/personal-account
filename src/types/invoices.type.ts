export type TypeInvoiceDTO = {
  id: string;
  user_id: string;
  amount: number;
  status: string;
  created_at: string;
  users: {
    id: string;
    name?: string;
    email: string;
  };
};

export type TypeInvoice = {
  id: string;
  email: string;
  amount: number;
  status: string;
};

export const invoiceMapDTO = (dto: TypeInvoiceDTO): TypeInvoice => {
  return {
    id: dto.id,
    email: dto.users.email,
    amount: dto.amount,
    status: dto.status,
  };
};

//
export type TypeInvoiceUser = {
  id: string;
  email: string;
};
