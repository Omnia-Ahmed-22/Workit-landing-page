
export function ButtonPrimary ({name}) {
    return (
        <button className={`bg-green py-3 px-8 text-purple-900 border-2 border-green hover:text-green hover:bg-transparent font-bold font-manrope leading-7 text-[16px] tablet:text-lg`}>
            {name}
        </button>
    );
}



export  function ButtonSecondary({name}) {
    return (
        <button className={`border-b-3 border-green text-white hover:text-green font-bold font-manrope leading-7 text-lg`}>
            {name}
        </button>
    );
}