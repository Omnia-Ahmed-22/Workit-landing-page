import logo from './assets/logo-dark.svg';

function Footer() {
   return (
      <div className='py-28 px-20 flex flex-col justify-start items-center gap-14'>
         <img src={logo} alt="logo" />
         <div className='flex justify-center items-center gap-7 text-3xl text-purple-500'>
         <i class="fa-brands fa-square-facebook hover:text-purple-900"></i>
         <i class="fa-brands fa-twitter hover:text-purple-900"></i>
         <i class="fa-brands fa-instagram hover:text-purple-900"></i>
         </div>
      </div>
   );
}

export default Footer;