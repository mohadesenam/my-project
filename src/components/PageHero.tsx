export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" />
      </div>
      <div className="section-padding relative z-10">
        {eyebrow && <span className="heading-eyebrow">{eyebrow}</span>}
        <h1 className="font-serif text-4xl lg:text-6xl font-light text-white mb-4">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
