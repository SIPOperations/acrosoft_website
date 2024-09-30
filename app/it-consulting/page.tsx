import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'IT Consulting',
};

import consulting from '../../public/img/consulting.png'
import Header from '../../components/Header';
import KeyDirection from '../../components/KeyDirection'
import Approach from '../../components/Approach'
import Scope from '../../components/Scope'
import Technology from '../../components/Technology'

const page = () => {
  return (
    <div>
        <Header bgImage={consulting} heading={''} />
        <KeyDirection />
        <Approach />
        <Scope />
        <Technology />
    </div>
  )
}

export default page