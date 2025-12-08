import { ButtonPrimary } from "./components/Button";
import founderImg from './assets/image-founder.webp';
import pattern3 from './assets/bg-pattern-3.svg'

function Cat() {
   return (
      <div className="pt-28 px-5 tablet:px-11 desktop:px-20">
         <div className="flex flex-col tablet:flex-row justify-center items-center tablet:items-start">
            <img
            src={founderImg}
            alt="founder"
            className="w-[280px] h-[280px] desktop:w-[477px] desktop:h-[477px]"
            />
            <div className="-mt-12 tablet:mt-[168px] relative">
               <div className="flex flex-col gap-8 p-8 tablet:p-12 desktop:p-16
               items-center tablet:items-start bg-purple-900 text-white
               w-[335px] tablet:w-[504px] desktop:w-[730px]
               tablet:-ml-[105px] desktop:-ml-[84px]">
                  <p className="font-fraunces font-semibold leading-[100%]
                  text-[32px] tablet:text-5xl desktop:text-[56px]
                  text-center tablet:text-start">
                     Be the first to test
                  </p>
                  <p className="font-manrope leading-[180%] text-[16px]
                  desktop:text-lg desktop:pr-4
                  text-center tablet:text-start">
                     Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.
                  </p>
                  <ButtonPrimary name={'Apply for access'}/>
               </div>
               <img
               src={pattern3}
               alt="pattern"
               className="absolute hidden tablet:block
               tablet:right-2.5 tablet:-bottom-[125px]
               desktop:right-[150px] desktop:-bottom-[70px]"
               />
            </div>
         </div>
      </div>
   );
}

export default Cat;