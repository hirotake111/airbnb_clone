export const MockImage = ({ src, alt }: { src: string; alt: string }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} />;
};

export const MockLink = ({ href }: { href: string }) => (
  <a href={href}>mock link</a>
);
