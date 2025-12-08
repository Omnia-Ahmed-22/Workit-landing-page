import {ButtonPrimary, ButtonSecondary} from "./components/Button.jsx";
import logoWhite from './assets/logo-light.svg'
import pattern1 from './assets/bg-pattern-1.svg'
import pattern2 from './assets/bg-pattern-2.svg'
import bgpattern from './assets/bg-bottom-pattern-purple.png'
import phone from './assets/image-hero.webp'


export default function Hero () {
    return(
        <>
        <nav className="pt-8 desktop:pt-14 px-5 tablet:px-11 desktop:px-20 flex justify-between">
            <img
            src={logoWhite}
            alt="logo" 
            className="w-24 h-6"
            />
            <ButtonSecondary name={"Apply for access"}/>
        </nav>
        <div className="overflow-hidden relative pt-14 px-[19px] tablet:px-11 desktop:px-20 pb-36 desktop:pb-[296px] ">
            <div className="flex justify-center items-center">
                <img
                src={pattern1}
                alt="pattern"
                className="absolute hidden tablet:block
                tablet:-left-[210px] tablet:top-0
                desktop:-left-[101px] desktop:top-[47px]"
                />
                <div className="flex flex-col gap-10 items-center">
                    <p className="text-white font-fraunces font-semibold text-5xl tablet:text-6xl desktop:text-[80px] text-center">
                        Data <span className="border-b-3 border-green">tailored</span> to<br className="hidden tablet:block"/> your needs.
                    </p>
                    <ButtonPrimary name={'Learn more'} />
                </div>
                <img
                src={pattern2}
                alt="pattern"
                className="absolute hidden tablet:block
                tablet:-right-[100px]
                desktop:-right-[49px] desktop:bottom-[200px]"
                />
            </div>
        </div>
        <img src={bgpattern} alt="pattern" />
        <div className="bg-purple-100 flex justify-center
        px-5 tablet:px-11 desktop:px-20">
            <img
            src={phone}
            alt="phone"
            className="w-[360px] tablet:w-[602px] desktop:w-[767px] h-[184px] tablet:h-[296px] desktop:h-[441px]
            -mt-[90px] tablet:-mt-[148px] desktop:-mt-[290px]"
            />
        </div>
        </>
    );
}