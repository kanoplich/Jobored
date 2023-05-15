import { Button } from '@mantine/core';
import './empty.css';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <div className="empty__wrapper">
      <div className="empty__image"></div>
      <span className="empty__text">Упс, здесь еще ничего нет!</span>
      <Link to="/">
        <Button radius="md" size="sm" style={{ fontWeight: 500, fontSize: 14, lineHeight: 21 }}>
          Поиск Вакансий
        </Button>
      </Link>
    </div>
  );
};

export default Empty;
