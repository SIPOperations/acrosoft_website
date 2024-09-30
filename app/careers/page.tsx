import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Careers',
};

import Header from '@/components/Header';
import Openings from '@/components/Openings'
import careers from '@/public/img/careers.png'

const HomePage = async () => {
  const text="We're excited to meet you. Outlined below are the current roles that Acrosoft is looking to find new individuals to join our team."

  return (
    <div>
      <Header bgImage={careers} heading={'Careers at Acrosoft'} para={text} />
      <Openings />
    </div>
  );
};

export default HomePage;
