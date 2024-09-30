import Link from "next/link"
import BlackBtn from "./BlackBtn"

const Listing3 = (props) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <ul role="list" className="divide-y divide-[#858585]">
        {props.posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/careers/${post.slug}`} 
            className="grid grid-cols-1 xl:grid-cols-5 gap-20 p-16 font-normal text-xl 
            text-[#858585]">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-xl text-[#1B1B1B]">{post.title}</p>
                <div className="flex items-center gap-2 xl:hidden text-center justify-center">
                  <p className="font-semibold text-xl text-[#1B1B1B]">{post.workspace}</p>
                  &bull;
                  <p>{post.department}</p>
                  &bull;
                  <p>{post.work}</p>
                </div>
                <p className="xl:hidden">{post.location}</p>
                <p>{`Posted ${post.date}`}</p>
              </div>
              <p className="font-semibold text-xl text-[#1B1B1B] hidden xl:block">
                {post.workspace}
              </p>
              <p className="hidden xl:block">{post.location}</p>
              <p className="hidden xl:block">{post.department}</p>
              <p className="hidden xl:block">{post.work}</p>
            </Link>
          </li>
        ))}
      </ul>
      <BlackBtn name={'Show More'} />
    </div>
  )
}

export default Listing3