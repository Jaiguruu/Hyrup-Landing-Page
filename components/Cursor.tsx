import ParticleField from './ui/ParticleField';
function Cursor() {
  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none"
    >
      <ParticleField
        count={480}
        magnetRadius={10}
        ringRadius={10}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={2}
        lerpSpeed={0.1}
        color="#ef4444"
        autoAnimate={false}
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1.7}
        pulseSpeed={3}
        particleShape="tetrahedron"
        fieldStrength={15}
      />
    </div>

  );
}


export { Cursor }