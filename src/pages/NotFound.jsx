import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Page{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          not found
        </span>
      </h1>

      <p className='text-slate-500 mt-4 leading-relaxed'>
        That link doesn&apos;t point anywhere on this site. It may have moved,
        or the address may have a typo in it.
      </p>

      <div className='mt-8 flex gap-4 flex-wrap'>
        <Link to='/' className='btn w-auto'>
          Back home
        </Link>
        <Link to='/projects' className='text-blue-600 font-semibold self-center'>
          See my work
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
