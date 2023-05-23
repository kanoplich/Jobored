import { NumberInput } from '@mantine/core';

type SalaryProps = {
  handleChangePayment: (item: number | '') => void;
  str: string;
  value: number | '';
  dataElem: string;
};

const Salary = ({ handleChangePayment, str, value, dataElem }: SalaryProps) => {
  return (
    <NumberInput
      data-elem={dataElem}
      style={{ fontSize: '14px', lineHeight: '20' }}
      placeholder={str}
      min={0}
      step={100}
      radius="md"
      size="md"
      withAsterisk
      onChange={(item) => handleChangePayment(item)}
      value={value}
    />
  );
};
export default Salary;
