export function AmbientLight() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[8]">
      <div className="ambient-core absolute inset-0 animate-[light-breathe_8s_ease-in-out_infinite]" />
      <div className="ambient-light absolute inset-0 animate-[light-breathe_9s_ease-in-out_infinite_0.6s]" />
    </div>
  );
}