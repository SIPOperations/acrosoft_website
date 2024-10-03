import { getPostData, getAllPostSlugs } from '../../../../lib/jobs';
import Header from '@/components/Header';
import careers from '@/public/img/careers.png'
import ApplyingForm from '@/components/ApplyingForm'

interface PostPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map(({ slug }) => ({ slug }));
}

const page = async ({ params }: PostPageProps) => {
    const postData = await getPostData(params.slug);
    const data = {
        workspace: postData.workspace,
        location: postData.location,
        department: postData.department,
        work: postData.work
    }
    return (
        <div>
            {/* <head>
                <title>{postData.title}</title>
            </head> */}
            <Header bgImage={careers} heading={postData.title} data={data} />
            <ApplyingForm heading={postData.title} />
        </div>
    )
}

export default page