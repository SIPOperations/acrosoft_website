import GridBoxs from "./GridBoxs";

const Scope = () => {
  const scopelist=[
    {
        heading:'Application Service',
        content:'Itransition offers full-cycle application services that encompass custom development, migration, management, testing, and more, to help companies digitize their workflows, enhance customer experiences, and keep their apps in line with evolving business needs.'
    },{
        heading:'Managed IT Service',
        content:'Itransition comes up with a pack of managed IT services for businesses that lack human resources to manage their software environments or those wanting to delegate this task to a dedicated team.'
    },{
        heading:'Mobile Enablement',
        content:'Itransition assists companies in adopting mobile technologies. We design mobile adoption strategies and implement mobile solutions for businesses to make their operations, services and products available for mobile users globally.'
    },{
        heading:'Application modernization',
        content:'When it’s time to modernize, we provide comprehensive legacy software audit, offer a route for improvement, and upgrade the app according to your new requirements.'
    },{
        heading:'DevOps Setup',
        content:'In addition to following DevOps best practices in our projects, we also incorporate DevOps for companies looking to achieve greater efficiency of their software delivery and the collaboration of development and operational teams.'
    },{
        heading:'Product Engineering',
        content:'We deliver off-the-shelf software for product companies responding to the market demands. Our services include software product consulting, prototyping, UI and UX design, MVP development, product finalization and release.'
    }
  ]
  return (
    <div className="flex flex-col xl:px-40 sm:px-16 px-10 py-16 items-center xl:items-start">
      <h1 className="font-extrabold text-center text-[64px] text-[#1B1B1B] mb-5">
        Complete Service Scope
      </h1>
      <GridBoxs gridList={scopelist} name={'scope'} shadow={true} />
    </div>
  );
};

export default Scope;
