const SecContainer = ({ children, className }) => {
  return (
    <section className={className}>
      <div className="container mx-auto px-3">{children}</div>
    </section>
  );
};

export default SecContainer;
