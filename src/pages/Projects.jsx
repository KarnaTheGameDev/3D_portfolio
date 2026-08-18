import { CTA } from "../components";
import { projects, PROJECT_CATEGORIES } from "../constants";
import { arrow } from "../assets/icons";

const ProjectCard = ({ project }) => (
  <div className='lg:w-[400px] w-full'>
    <div className='block-container w-12 h-12'>
      <div className={`btn-back rounded-xl ${project.theme}`} />
      <div className='btn-front rounded-xl flex justify-center items-center'>
        <img
          src={project.iconUrl}
          alt=''
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>

    <div className='mt-5 flex flex-col'>
      <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
      <p className='mt-2 text-slate-500'>{project.description}</p>

      {project.link && (
        <div className='mt-5 flex items-center gap-2 font-poppins'>
          {/* A plain anchor, not react-router's Link — Link is for in-app
              paths and mangles absolute URLs. */}
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-600'
          >
            View project
          </a>
          <img src={arrow} alt='' className='w-4 h-4 object-contain' />
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        A mix of client work and things I built for myself. The client projects
        are AR, IoT and simulation systems shipped for real venues and
        engineering teams, so most have no public link. The personal ones are
        open source &mdash; have a dig through the code.
      </p>

      {PROJECT_CATEGORIES.map(({ key, label }) => {
        const group = projects.filter((project) => project.category === key);
        if (group.length === 0) return null;

        return (
          <div key={key} className='mt-20'>
            <h3 className='subhead-text'>{label}</h3>
            <div className='flex flex-wrap mt-12 gap-16'>
              {group.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        );
      })}

      <hr className='border-slate-200 mt-20' />

      <CTA />
    </section>
  );
};

export default Projects;
