import { FC } from 'react';
import {IExperience} from "@/models/IExperience";
import Typography from "@/components/ui/typography/Typography";
import {Title} from "@/components/ui/title";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Tag} from "@/components/ui/tag";
import {Ref} from "@/components/ui/ref";

interface IExperienceBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IExperience
};


const ExperienceBlock: FC<IExperienceBlockProps> = ({data}) => {

  return (
    <div className={'grid grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 p-8 rounded-lg cursor-pointer hover:shadow-md hover:bg-secondary'}>
      <div className={''}>
        <Typography className={'text-xs'}>{data.period?.start?.format(DATE_FORMAT).toUpperCase()} — {data.period?.end?.isValid() ? data.period?.end?.format(DATE_FORMAT).toUpperCase() : 'ПО Н. В.'}</Typography>
      </div>
      <div className={'grow'}>
        <Title level={3}>{data.company}</Title>
        <Typography className={'!text-primary-dark text-lg mb-[10px]'}>{data.position}</Typography>
        <Typography className={'text-sm mb-[14px] leading-[1.3rem]'}>{data.achievements}</Typography>
        <div className={'flex gap-2 mb-[18px]'}>
          {data.projects?.map((project) => (
            <Ref key={project.name}>{project.name}</Ref>
          ))}
        </div>
        <div className={'flex flex-wrap gap-2'}>
          {data.projects?.flatMap((project) => project.myTechnologies?.flatMap(tech => (
            <Tag key={tech.id}>{tech.name}</Tag>
          )))}
          {data.technologies?.map((tech) => (
            <Tag key={tech.name}>{tech.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceBlock;
