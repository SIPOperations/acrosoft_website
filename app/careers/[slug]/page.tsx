import careers from '@/public/img/careers.png'
import Header from '@/components/Header';
import { getPostData, getAllPostSlugs } from '../../../lib/jobs';
import Description from '@/components/Description'
// import Head from 'next/head';

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const postData = await getPostData(params.slug);
  const data={
    workspace:postData.workspace,
    location:postData.location,
    department:postData.department,
    work:postData.work
  }
  return (
    <div>
      <head>
        <title>{postData.title}</title>
      </head>
      <Header bgImage={careers} heading={postData.title} data={data} />
      <Description content={postData.contentHtml} />
    </div>
  );
};

export default PostPage;
