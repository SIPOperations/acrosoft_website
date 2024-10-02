import { Audiowide,Montserrat,DM_Sans,DM_Serif_Display } from "next/font/google";

const audiowide = Audiowide({
    weight: ["400"], // Select the weights you need
    subsets: ["latin"],
});
const montserrat = Montserrat({
    weight: ["500"], // Select the weights you need
    subsets: ["latin"],
});
const dm_sans = DM_Sans({
    weight: ["700"], // Select the weights you need
    subsets: ["latin"],
});
const dm_serif_display = DM_Serif_Display({
    weight: ["400"], // Select the weights you need
    subsets: ["latin"],
});

const brands=['Chevron','ClickUp','Shell','strip','ExxonMobil','RingCentral']

const Sponsers = () => {
  return (
    <div 
    className="text-center grid grid-rows-3 md:grid-rows-2 xl:grid-rows-1 grid-flow-col items-center 
    justify-evenly xl:justify-between gap-y-10 xl:px-40 px-16 py-6 font-normal" 
    style={
        {
            // backgroundColor:'#EFEFEF',
            // border:'0.5px solid #D3D3D3',
            color:'#C7C7C7',
            fontSize:'32px'
        }
    }
    >
      {brands.map((brand,index)=>(
        <p 
        key={index} 
        className={`${brand==='Chevron' ? 
            audiowide.className : 
            brand==='ClickUp' ?
            montserrat.className : 
            brand==='ExxonMobil' ?
            dm_serif_display.className :
            dm_sans.className}`}
        >
            {brand}
        </p>
      ))}
    </div>
  )
}

export default Sponsers