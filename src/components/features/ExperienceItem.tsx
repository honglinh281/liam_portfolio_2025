interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
}

const ExperienceItem = ({ exp }: { exp: Experience }) => {
  return (
    <div className="mb-12 border-l border-gray-200 pl-8 relative">
      <div className="absolute w-3 h-3 bg-black rounded-full -left-[6.5px] top-1.5"></div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
        <h3 className="text-xl font-bold">{exp.role}</h3>
        <span className="text-sm font-mono text-gray-500">{exp.period}</span>
      </div>
      <div className="text-lg font-medium text-gray-700 mb-2">
        {exp.company}
      </div>
      <p className="text-gray-600 italic mb-4">{exp.description}</p>
      <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600">
        {exp.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
