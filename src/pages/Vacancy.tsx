import { Card } from '@mantine/core';
import CardJob from '../components/Card/CardJob';
import Spinner from '../components/Spinner/Spinner';
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
          <div className="card__wrapper">
            <CardJob props={data} />
            <Card padding="24px" radius="md" mb={51} withBorder>
              <div dangerouslySetInnerHTML={{ __html: data.vacancyRichText }}></div>
            </Card>
          </div>
        )
      )}
    </div>
  );
};

export default Vacancy;
