import WorkItem from "./WorkItem";

const data = [
  {
    year: 2004,
    title: "Started working at company A",
    duration: "Toujours en poste",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum.",
  },
  {
    year: 2008,
    title: "Started working at company B",
    duration: "2008 - 2012",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum.",
  },
  {
    year: 2012,
    title: "Started working at company C",
    duration: "2012 - 2016",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum.",
  },
  {
    year: 2016,
    title: "Started working at company D",
    duration: "2016 - 2020",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum. Sed et semper felis. Nullam sed purus in nisi ultricies ultricies. Sed nec nunc nec justo tempus fermentum.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Expériences
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
