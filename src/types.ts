interface IVacancy {
  id: number;
  profession: string;
  vacancyRichText: string;
  type_of_work: {
    title: string;
  };
  payment_from: number;
  payment_to: number;
  town: {
    title: string;
  };
  currency: string;
}

export interface IVacancies {
  objects: Array<IVacancy>;
}
