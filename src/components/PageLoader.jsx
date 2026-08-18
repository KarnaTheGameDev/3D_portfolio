/**
 * Route-level fallback. Distinct from <Loader />, which wraps drei's <Html />
 * and therefore only works inside a <Canvas>.
 */
const PageLoader = () => {
  return (
    <section className='max-container flex justify-center items-center'>
      <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
    </section>
  );
};

export default PageLoader;
