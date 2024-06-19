import LightingPrefSelect from '@/components/LightingPrefSelect';
import ContractionTimer from '@/routes/contraction-timer/page';

export default function Home() {
  return (
    <div>
      <LightingPrefSelect className="absolute right-1 top-1" />

      <ContractionTimer />
    </div>
  );
}
