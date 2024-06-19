import Button from '@/components/Button';

type ContractionButtonProps = {
  active?: boolean;
};

export default function ContractionButton({ active }: ContractionButtonProps) {
  return (
    <Button>{active ? 'Contraction stopped' : 'Contraction started'}</Button>
  );
}
