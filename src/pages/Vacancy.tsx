import Spinner from '../components/Spinner/Spinner';
import VacancyView from '../components/VacancyView/VacancyView';
import { useGetVacancyIDQuery } from '../store/reducers/apiSlice';

type VacancyProps = {
  id: number;
};

const Vacancy = ({ id }: VacancyProps) => {
  const { data, isLoading, isSuccess } = useGetVacancyIDQuery(id);

  return (
    <div className="container">
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        isSuccess && (
          <VacancyView
            id={data.id}
            currency={data.currency}
            payment_from={data.payment_from}
            payment_to={data.payment_to}
            profession={data.profession}
            town={data.town.title}
            type_of_work={data.type_of_work.title}
            vacancyRichText={data.vacancyRichText}
          />
        )
      )}
    </div>
  );
};

export default Vacancy;
