import Heading1 from "./Heading1"
import JobForm from "./JobForm"
import Listing3 from "./Listing3"
import { getAllPostSlugs, getPostData } from '../lib/jobs';

const Openings = async () => {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-10 justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8]">
        <Heading1 topic={'Job Openings'} />
        <JobForm posts={posts} />
        <Listing3 posts={posts} />
    </div>
  )
}

export default Openings