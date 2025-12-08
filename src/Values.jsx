import bgpattern from './assets/bg-bottom-pattern-white.png'

const values = [
   {id: 1, header: 'Actionable insights', text: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'},
   {id: 2, header: 'Data-driven decisions', text: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'},
   {id: 3, header: 'Always affordable', text: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'},
];

export default function Values() {
   return(
      <>
         <div className='py-16 px-5 tablet:px-11 tablet:pb-11 tablet:pt-14 desktop:pt-[88px] desktop:px-20 desktop:pb-36 '>
            <div className='flex flex-col desktop:flex-row gap-8 items-start justify-center'>
               {values.map((value) => {
                  return(
                     <div className='flex items-center justify-center gap-14 flex-col tablet:flex-row desktop:flex-col w-full desktop:w-[352px] px-1.5'>
                        <div>
                           <div className='flex items-center justify-center w-12 h-12 desktop:w-14 desktop:h-14 rounded-full border border-purple-500 text-xl desktop:text-2xl text-purple-900 font-semibold font-fraunces'>
                              {value.id}
                           </div>
                        </div>
                        <div className='flex flex-col gap-4 tablet:gap-7 text-purple-900 items-center tablet:items-start desktop:items-center justify-center'>
                           <p className='font-fraunces font-semibold leading-[120%] text-2xl tablet:text-[28px] desktop:text-[32px]'>
                              {value.header}
                           </p>
                           <p className='font-manrope font-normal leading-[180%] text-[16px] tablet:text-lg
                           text-center tablet:text-start desktop:text-center'>
                              {value.text}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <img src={bgpattern} alt="pattern" className='w-full' />
      </>
   );
}