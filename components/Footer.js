
import Image from 'next/image'
import Link from 'next/link'
import insta from '../public/images/insa.png'
import x from '../public/images/x.png'
import socila from '../public/images/social2.png'
import logo from '../public/images/Logo.png'
import arowtoto from '../public/images/arowtoto.png'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4">
     <div className="footer_left w-full  sm:w-[20%] bg-[var(--nav-bg)] rounded-[1rem]">
        <div className="p-6 flex flex-col gap-12 justify-between h-full">
            <Image src={logo} alt="logo" className="m-2"/>
            <div className=" flex gap-3 justify-around">
                <div className="arow"><Image src={insta} alt="insta" className="m-2"/></div>
                <div className="arow"><Image src={x} alt="x" className="m-2"/></div>
                <div className="arow"><Image src={socila} alt="socila" className="m-2"/></div>
                
            </div>
        </div>
     </div>
     <div className="footer_right sm:w-[80%] flex flex-col gap-4 text-white ">
        <div className="footer_top flex flex-col md:flex-row justify-between py-2 px-8 w-full bg-[var(--nav-bg)] rounded-[1rem]">
            <div className=" p-4 md:w-[30%]">
                <ul className='footer_ul'>
                    <li className="font-bold text-xl uppercase my-2">pages</li>
                    {['Home', 'Services', 'Studio', 'Jobs', 'Contact'].map((item) => (
              <li key={item}><Link href="#" className="">{item}</Link></li>
            ))}
                </ul>
                <button type="button" className='footer_button mt-6'>more templates</button>
            </div>
            <div className="md:w-[30%] p-4">
                <ul className='footer_ul'>
                    <li className="font-bold text-xl uppercase my-2">CMS</li>
                    {['Projects', 'Project Single', 'Blog', 'Blog Single', 'Shop', 'Shop Single'].map((item) => (
              <li key={item}><Link href="#" className="">{item}</Link></li>
            ))}
                </ul>
                
            </div>
            <div className="md:w-[30%] p-4">
                <ul className='footer_ul'>
                    <li className="font-bold text-xl uppercase my-2">Utility Pages</li>
                    {['404 Error Page', 'Password Protected', 'Styleguide', 'Licensing', 'Changelog'].map((item) => (
              <li key={item}><Link href="#" className="">{item}</Link></li>
            ))}
                </ul>
                
            </div>
        </div>
        <div className="footer_bottom flex flex-col md:flex-row items-center md:items-start gap-4 justify-between p-6 bg-[var(--nav-bg)] rounded-[1rem]">
        <div>© Made by <a href="#" className="underline hover:text-white">Mohamed Hisham</a></div> 

        <Link href="#nav" className="flex flex-col md:flex-row">
         <div className="cursor-pointer items-center flex gap-2">
            <p className="uppercase text-sm">to top</p>
          <div className="arow"><Image src={arowtoto} alt="arow-down" className="m-2"/></div>
          
        </div> 
        </Link>
        </div>
     </div>
    </footer>
  );
}
