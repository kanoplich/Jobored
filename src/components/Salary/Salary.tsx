import { NumberInput } from '@mantine/core';

const Salary = () => {
  return (
    <NumberInput
      style={{ fontSize: '14px', lineHeight: '20' }}
      placeholder="От"
      min={0}
      step={10}
      radius="md"
      size="md"
      withAsterisk
    />
  );
};

export default Salary;
