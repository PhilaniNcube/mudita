import Image from 'next/image';
import {Fragment} from 'react'
import { ProjectMission } from '../../lib/hero';

type ComponentProps = {
  projectMission: ProjectMission;
};

const TopSection = ({projectMission}: ComponentProps) => {




  return (
    <Fragment>
      <section className="pt-16 pb-12" id="about">
        <div className="max-w-7xl mx-auto py-4 px-4 grid gird-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-28">
          <div className="flex flex-col justify-between">
            {" "}
            <div className="text-slate-700 flex space-x-3 items-center">
              <p className="text-sm md:text-lg md:font-bold font-serif uppercase font-medium">
                A little bit about us{" "}
              </p>{" "}
            </div>{" "}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800">
             {projectMission.fields.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-[1.4rem] leading-8 font-medium mt-4 text-gray-700 text-justify">
             {projectMission.fields.text}
            </p>
          </div>
          <div className="h-full">
            <Image
              src={`https:${projectMission.fields.image.fields.file.url}`}
              width={1200}
              height={1436}
              alt="Friends"
              className="w-full aspect-1 col-span-2 md:col-span-1 object-cover "
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopSection;
