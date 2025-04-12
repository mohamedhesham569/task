'use client';
import Nav from "@/components/Nav";
import Image from "next/image";
import arowdown from "../public/images/arow_down.png"
import arowup from "../public/images/arow-up.png"
import arowright from "../public/images/arow_right.png"
import Link from "next/link";
import logo1 from "../public/images/logo1.png"
import logo2 from "../public/images/logo2.png"
import logo3 from "../public/images/logo3.png"
import logo4 from "../public/images/logo4.png"
import logo5 from "../public/images/logo5.png"
import logo6 from "../public/images/logo6.png"
import about1 from "../public/images/about1.png"
import about2 from "../public/images/about2.png"
import social from "../public/images/socila.png"
import social2 from "../public/images/social2.png"
import insta from "../public/images/insa.png"
import x from "../public/images/x.png"
import news1 from "../public/images/news1.png"
import news2 from "../public/images/news2.png"
import news3 from "../public/images/news3.png"
import Footer from "@/components/Footer";


export default function Home() {
  

  return (
   <>
   <div className="page_wrapper">

    <Nav/>

      /* landing page*/

    <section>
      <div className="landing my-4 sm:bg-center bg-pos-x">
        <div className="layout"></div>
        <div className="landing_text">
          <h1 className=" ml-4 md:ml-[8.5%] text-[11vw] md:text-[9vw] mt-[50%] md:mt-[16%]">Fashion</h1>
          <h1 className=" md:mx-auto ml-4 text-[11vw]  md:text-[9vw] md:ml-[-4%] md:text-center mt-[-5%]">& Branding</h1>
          <p className="flex my-4 mx-6 text-base/8 md:ml-[19%] md:px-[10px] md:pt-[5px] md:pb-[20px] md:mb-[40px] lp md:justify-center md:w-1/2">Bringing Your Fashion Brand's Unique Identity to Life Through Strategic Marketing and Advertising.</p>
        </div>
        <Link href="/" className="hidden md:flex">
         <div className="cursor-pointer learn_more flex gap-2">
          <div className="arow"><Image src={arowdown} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-sm">learn more</p>
        </div> 
        </Link>
      </div>
      <div className="cards justify-center flex-wrap flex gap-3 items-center flex-col md:flex-row">
      <div className="card   ">
        <div className="card_text p-3">
        <h1 className="pt-3 px-2 mx-3 text-2xl mb-1 uppercase text-white">Branding</h1>
        <p className="px-2 mx-3 text-md cardp">Develop a strong,
recognizable fashion brand
identity.</p></div>
        <Link href="/" className="flex text-white md:mt-8 mt-3 mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-sm text-white">about Branding</p>
        </div> 
        </Link>
      </div>
      <div className="card ">
        <div className="card_text p-3">
        <h1 className="pt-3 px-2 mx-3 text-2xl mb-1 uppercase text-white">Identity</h1>
        <p className="px-2 mx-3 text-md cardp">We create a unique and
consistent image for your
fashion brand.</p></div>
        <Link href="/" className="flex text-white md:mt-8 mt-3 mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-sm text-white">about Identity</p>
        </div> 
        </Link>
      </div>
      <div className="card ">
        <div className="card_text p-3">
        <h1 className="pt-3 px-2 mx-3 text-2xl mb-1 uppercase text-white">Marketing</h1>
        <p className="px-2 mx-3 text-md cardp">Reach and engage your
target audience effectively on
all plattforms.</p></div>
        <Link href="/" className="flex text-white md:mt-8 mt-3 mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-sm text-white">about Marketing</p>
        </div> 
        </Link>
      </div>
      <div className="card ">
        <div className="card_text p-3">
        <h1 className="pt-3 px-2 mx-3 text-2xl mb-1 uppercase text-white">E-Commerce</h1>
        <p className="px-2 mx-3  text-md cardp">Optimize online sales and
drive growth for your e-
commere store.</p></div>
        <Link href="/" className="flex text-white md:mt-8 mt-3 mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-sm text-white">about E-Commerce</p>
        </div> 
        </Link>
      </div>
      </div>
      <div className="logos my-5 sm:mx-5 sm:p-8 sm:mx-8 flex gap-3 items-center align-center justify-between flex-wrap">
      <div className="logo"><Image src={logo1} alt="logo1" className="m-2"/></div>
      <div className="logo"><Image src={logo2} alt="logo1" className="m-2"/></div>
      <div className="logo"><Image src={logo3} alt="logo1" className="m-2"/></div>
      <div className="logo"><Image src={logo4} alt="logo1" className="m-2"/></div>
      <div className="logo"><Image src={logo5} alt="logo1" className="m-2"/></div>
      <div className="logo"><Image src={logo6} alt="logo1" className="m-2"/></div>
      </div>
    </section> 

    /* end of landing */  
    /*about*/
    <section className="">
      <div className=" flex gap-3 m-2 flex-col md:flex-row">
      <div className="about_image flex w-full md:w-1/2">
          <Image src={about1} alt="about" className="h-[250px] md:h-full" style={{borderRadius: "1rem"}}/>
      </div>
      <div className="about_text text-white md:w-1/2 w-full">
      <div className="p-4 md:p-10">
        <p className="uppercase text-sm p-2 m-3">About</p>
        <h1 className="md:text-6xl text-4xl uppercase p-1 m-3 mt-14 md:mt-[12rem]">Bringing <br/>
Fashion <br/>
Brands to life</h1>
        <p className="md:flex hidden flex-col md:gap-6 text-base/8 text-2xl p-2 pr-0 pb-1 aboutp m-2 mr-0 md:flex-row">
          <span>At our agency, we are
passionate about bringing
fashion brands to life. With a
combination of creative vision,
strategic thinking, and industry
expertise. We help our clients</span>
          <span>transform their ideas into
vibrant realities that resonate
with their target audience,
leaving a lasting impact in the
fashion industry.</span>
        </p>
        <p className="md:hidden text-base/8 text-2xl p-2 pr-0 pb-1 aboutp mx-2 mr-0">
        At our agency, we are passionate
about bringing fashion brands to life.
With a combination of creative vision,
strategic thinking, and industry
expertise. We help our clients
transform their ideas into vibrant
realities that resonate with their target
audience, leaving a lasting impact in
the fashion industry.
        </p>
        </div>
      </div>
      </div>

      <div className="flex m-2 my-4 gap-3 flex-col-reverse md:flex-row ">
        <div className="cards2 flex md:w-1/2 w-full gap-3 flex-col">
          <div className="card1 p-3 md:p-5 md:py-7 text-white flex justify-between md:gap-20 items-center">
            <div className="card_text2 p-2 md:p-5">
            <h1 className="uppercase md:mb-4 text-[18px] md:text-3xl">Video Production</h1>
            <p className="card1p hidden md:flex">Our expert team produces high-quality videos that showcase
            your fashion brand in a visually stunning and engaging way.</p>
            </div>
            <Link href="/" className="arow p-2 md:mr-10">
            <div className="w-[16px] h-[15px]">
              <Image src={arowright} alt="arow-right"/>
              </div>
            
            </Link>
          </div>
          <div className="card1 p-3 md:p-5 md:py-7 text-white flex justify-between md:gap-20 items-center">
            <div className="card_text2 p-2 md:p-5">
            <h1 className="uppercase md:mb-4 text-[18px] md:text-3xl">Branding & Identity</h1>
            <p className="card1p hidden md:flex">We create unique and captivating brand identities that leave a
            lasting impression on your target audience.</p>
            </div>
            <Link href="/" className="arow p-2 md:mr-10">
            <div className="w-[16px] h-[15px]">
              <Image src={arowright} alt="arow-right"/>
              </div>
            
            </Link>
          </div>
          <div className="card1 p-3 md:p-5 md:py-7 text-white flex justify-between md:gap-20 items-center">
            <div className="card_text2 p-2 md:p-5">
            <h1 className="uppercase md:mb-4 text-[18px] md:text-3xl">Online Marketing</h1>
            <p className="card1p hidden md:flex">We develop impactful marketing strategies and execute
            compelling advertising campaigns.</p>
            </div>
            <Link href="/" className="arow p-2 md:mr-10">
            <div className="w-[16px] h-[15px]">
              <Image src={arowright} alt="arow-right"/>
              </div>
            
            </Link>
          </div>
          <div className="card1  p-3 md:p-5 md:py-7 text-white flex justify-between md:gap-20 items-center">
            <div className="card_text2 p-2 md:p-5">
            <h1 className="uppercase md:mb-4 text-[18px] md:text-3xl">E-Commerce</h1>
            <p className="card1p hidden md:flex">We design and build seamless online shops that provide an
            intuitive and enjoyable shopping experience.</p>
            </div>
            <Link href="/" className="arow p-2 md:mr-10">
            <div className="w-[16px] h-[15px]">
              <Image src={arowright} alt="arow-right"/>
              </div>
            
            </Link>
          </div>
        </div>
        <div className="about_image flex w-full md:w-1/2">
          <Image src={about2} alt="about" className="h-[330px] md:h-full w-full" style={{borderRadius: "1rem"}}/>
      </div>
      </div>
    </section>
    /* end about section*/
    /* brands section*/
    <div className="flex p-5 pt-0 mt-[-1rem] ml-4  justify-between items-center text-white">
      <h1 className="text-[2rem] md:text-[3rem] uppercase">Selected Brands</h1>
      <Link href="/" className="flex text-white mt-8 sm:flex hidden mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-md text-white">see all</p>
        </div> 
        </Link>
    </div>

    <div className="brands gap-4 flex flex-col md:hidden">
      <Link href="">
        <div className="brand1 b1 h-[290px]">
      <div className="text-white flex flex-col h-full bg-black/18 p-5 justify-between uppercase">
        <Image src={logo6} alt="brand1" className="" width={25}/>
        <h1 className="text-3xl uppercase">fashion</h1>
      </div>
        </div>
      </Link>
      <Link href="">
        <div className="brand1 b2 h-[290px]">
      <div className="text-white flex flex-col h-full bg-black/18 p-5 justify-between uppercase">
        <Image src={logo4} alt="brand1" className="" width={50}/>
        <h1 className="text-3xl uppercase">noise</h1>
      </div>
        </div>
      </Link>
      <Link href="">
        <div className="brand1 b3 h-[290px]">
      <div className="text-white flex flex-col h-full bg-black/18 p-5 justify-between uppercase">
        <Image src={logo3} alt="brand1" className="" width={35}/>
        <h1 className="text-3xl uppercase">lawyers</h1>
      </div>
        </div>
      </Link>
      <Link href="">
        <div className="brand1 b4 h-[290px]">
      <div className="text-white flex flex-col h-full bg-black/18 p-5 justify-between uppercase">
        <Image src={logo1} alt="brand1" className="" width={70}/>
        <h1 className="text-3xl uppercase">flowers</h1>
      </div>
        </div>
      </Link>
    </div>
    <div className="flex md:hidden bg-[var(--masterd)] contact_sm">
    <div className="flex flex-col w-full p-8">
      <div className="">
      <p className="uppercase">Contact</p>
      </div>
      <div className="">
         <h1 className="text-4xl uppercase my-3">Let's make<br/> your  <br/> fashion <br/> brand shine</h1> 
        <Link href="" className="flex justify-center bg-black text-white rounded-[7px] p-[5px]">
          <button className="uppercase">Get in touch</button>
          <Image src={arowup} alt="arow-down" className="m-2 mr-0"/>
          </Link>
      </div>
         
        </div>
    </div>

    <div className="main hidden md:block">
    <div id="title" className="slide header">
    <div className="title flex justify-between items-center">
      <div className="">
        <Image src={logo6} alt="logo" className=""/>
      </div>
      <div className="">
         <h1 className="text-8xl uppercase">Fashion</h1> 
          <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-[16px] text-white">Discover Project</p>
        </div> 
        </Link>
        <Link href="/" className="flex text-white branding">
         <div className="cursor-pointer ">
            branding
         </div>
        </Link>
      </div>
         
        </div>
      </div>
      
      <div id="slide1" className="slide">
      <div className="title flex justify-between items-center">
      <div className="">
        <Image src={logo4} alt="logo" className=""/>
      </div>
      <div className="">
         <h1 className="text-8xl uppercase">noise</h1> 
          <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-[16px] text-white">Discover Project</p>
        </div> 
        </Link>
        <Link href="/" className="flex text-white branding">
         <div className="cursor-pointer ">
            branding
         </div>
        </Link>
      </div>
         
        </div>
      </div>
      
      <div id="slide2" className="slide">
      <div className="title flex justify-between items-center">
      <div className="">
        <Image src={logo3} alt="logo" className=""/>
      </div>
      <div className="">
         <h1 className="text-8xl uppercase">lawyers</h1> 
          <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-[16px] text-white">Discover Project</p>
        </div> 
        </Link>
        <Link href="/" className="flex text-white branding">
         <div className="cursor-pointer ">
            branding
         </div>
        </Link>
      </div>
         
        </div>
      </div>
      
      <div id="slide3" className="slide">
      <div className="title flex justify-between items-center">
      <div className="">
        <Image src={logo1} alt="logo" className=""/>
      </div>
      <div className="">
         <h1 className="text-8xl uppercase">flowers</h1> 
          <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-[16px] text-white">Discover Project</p>
        </div> 
        </Link>
        <Link href="/" className="flex text-white branding">
         <div className="cursor-pointer ">
            branding
         </div>
        </Link>
      </div>
         
        </div>
      </div>
      
      <div id="slide4" className="slide header">
      <div className="title flex justify-between items-center">
      <div className="">
      <p className="uppercase">Contact</p>
      </div>
      <div className="">
         <h1 className="xl:text-[5rem] lg:text-[4rem] md:text-[2.5rem] uppercase text-base/20">Let's make your <br/>  fashion brand shine</h1> 
        <Link href="" className="get_in_touch flex">
          <button className="uppercase">Get in touch</button>
          <Image src={arowup} alt="arow-down" className="m-2 mr-0"/>
          </Link>
      </div>
         
        </div>
          
      </div>
    </div>

    <section>
    <div className="overflow-hidden whitespace-nowrap my-4 py-2 relative">
    <div className="flex animate-marquee-loop">
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
          <span className="px-4  text-white">
          Follow us on Social Media
          </span>
      </div>
      </div>
      <div className="cards justify-center flex gap-3 items-center flex-col md:flex-row">
      <div className="card   flex flex-col md:gap-13 card2">
        <div className="flex p-3 px-7 justify-between">
        <Image src={insta} alt="logo" className="" width={35}/>
        <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
        </div> 
        </Link>
        </div>
        <div className="text-white p-7">
          <h1 className="uppercase text-2xl my-3">Instagram</h1>
          <p className="text-[rgba(244,242,237,0.6)]">Captivating visuals that showcase our fashion brand's unique style and story.</p>
        </div>
      </div>
      <div className="card   flex flex-col  md:gap-13  card2">
        <div className="flex p-3 px-7 justify-between">
        <Image src={x} alt="logo" className="" width={35}/>
        <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
        </div> 
        </Link>
        </div>
        <div className="text-white p-7">
          <h1 className="uppercase text-2xl my-3">Twitter</h1>
          <p className="text-[rgba(244,242,237,0.6)]">Engaging conversations and updates that keep you connected with our fashion brand.</p>
        </div>
      </div>
      <div className="card   flex flex-col  md:gap-13  card2">
        <div className="flex p-3 px-7 justify-between">
        <Image src={social} alt="logo" className="" width={35}/>
        <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
        </div> 
        </Link>
        </div>
        <div className="text-white p-7">
          <h1 className="uppercase text-2xl my-3">Dribbble</h1>
          <p className="text-[rgba(244,242,237,0.6)]">Discover our creative process and stunning design work on Dribbble.</p>
        </div>
      </div>
      <div className="card   flex flex-col  md:gap-13  card2 ">
        <div className="flex p-3 px-7 justify-between">
        <Image src={social2} alt="logo" className="" width={35}/>
        <Link href="/" className="flex text-white ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
        </div> 
        </Link>
        </div>
        <div className="text-white p-7">
          <h1 className="uppercase text-2xl my-3">Behance</h1>
          <p className="text-[rgba(244,242,237,0.6)]">Explore our portfolio of fashion brand projects and creative collaborations on Behance.</p>
        </div>
      </div>
      </div>
      
    </section>
    <section className="mt-10"> 
    <div className="flex p-5 pt-0 mt-[-1rem] ml-4   justify-between items-center text-white">
      <h1 className="text-[2rem] md:text-[3rem] uppercase">Latest News</h1>
      <Link href="/" className="flex text-white mt-8 sm:flex hidden mx-5 p-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase text-md text-white">see all</p>
        </div> 
        </Link>
    </div>
    <div className=" flex flex-wrap gap-3 justify-center">
      <div className="news bg-[var(--nav-bg)] p-3  rounded-[1rem] flex flex-col gap-5 text-white  w-[460px]">
        <div className="news_image relative">
        <div className="layout"></div>
        <Image src={news1} alt="news" className="w-full rounded-[1rem]"/>
        <div className="absolute top-[80%] sm:right-[75%] right-[65%] border rounded-md bg-[rgba(255,255,255,0.23)] px-3 py-[5px] text-white">
        <button className="uppercase text-[13px]">Marketing</button>
        </div>
        
        </div>
        <h1 className="sm:mx-5 mx-2 px-1 sm:px-3 upercase text-2xl">The Power of Influencer Marketing</h1>
        <p className="sm:mx-5 mx-2 px-1 sm:px-3 text-[rgba(244,242,237,0.6)]">Discover how leveraging influencer partnerships can skyrocket your fashion brand's visibility and engagement.</p>
        <Link href="/" className="flex text-white mt-2 sm:mx-5 mx-2 px-1 sm:px-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase  text-white">read more</p>
        </div> 
        </Link>
      </div>
      <div className="news bg-[var(--nav-bg)] p-3  rounded-[1rem] flex flex-col gap-5 text-white  w-[460px]">
        <div className="news_image relative">
        <div className="layout"></div>
        <Image src={news2} alt="news" className="w-full rounded-[1rem]"/>
        <div className="absolute top-[80%] sm:right-[75%] right-[65%] border rounded-md bg-[rgba(255,255,255,0.23)] px-3 py-[5px] text-white">
        <button className="uppercase text-[13px]">Branding</button>
        </div>
        
        </div>
        <h1 className="sm:mx-5 mx-2 px-1 sm:px-3 upercase text-2xl">Effective Advertising Strategies for Fashion Brands</h1>
        <p className="sm:mx-5 mx-2 px-1 sm:px-3 text-[rgba(244,242,237,0.6)]">Uncover the proven tactics and techniques to create compelling advertisements that drive results for your fashion brand.</p>
        <Link href="/" className="flex text-white mt-2 sm:mx-5 mx-2 px-1 sm:px-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase  text-white">read more</p>
        </div> 
        </Link>
      </div>
      <div className="news bg-[var(--nav-bg)] p-3  rounded-[1rem] flex flex-col gap-5 text-white  w-[460px]">
        <div className="news_image relative">
        <div className="layout"></div>
        <Image src={news3} alt="news" className="w-full rounded-[1rem]"/>
        <div className="absolute top-[80%] sm:right-[75%] right-[65%] border rounded-md bg-[rgba(255,255,255,0.23)] px-3 py-[5px] text-white">
        <button className="uppercase text-[13px]">Branding</button>
        </div>
        
        </div>
        <h1 className="sm:mx-5 mx-2 px-1 sm:px-3 upercase text-2xl">Role of Public Relations in Building a Fashion Brand</h1>
        <p className="sm:mx-5 mx-2 px-1 sm:px-3 text-[rgba(244,242,237,0.6)]">Explore the vital role PR plays in establishing brand reputation, fostering industry relationships, and driving brand growth.</p>
        <Link href="/" className="flex text-white mt-2 sm:mx-5 mx-2 px-1 sm:px-3 mb-3 ">
         <div className="cursor-pointer flex items-center gap-3">
          <div className="arow"><Image src={arowup} alt="arow-down" className="m-2"/></div>
          <p className="uppercase  text-white">read more</p>
        </div> 
        </Link>
      </div>
    </div>
    <div className="subscripe flex sm:flex-row flex-col p-5 my-6 justify-between">
      <div className="subscripe_image flex sm:flex-row flex-col  gap-6 items-center">
      <Image src={news2} alt="subscripe" className="sm:w-[20%] rounded-[1rem]"/> 
      <div className="subscripe_text flex flex-col w-full gap-2 px-4 sm:px-0 text-white upercase">
        <p className="uppercase">Newsletter</p>
        <h1 className="uppercase sm:text-4xl text-2xl pr-4 sm:pr-0">Get Insights Behind the Scenes</h1>
      </div>
      </div>
      
      
      <div className="text-white flex sm:flex-row flex-col px-4 sm:px-0 mt-4 items-center gap-4 sm:w-[33%]">
        <div className="w-full"><input type="email" name="email" id="" className="sub_input w-full" placeholder="YOUR EMAIL"/></div>
        <div className="w-full"><button type="button" className="w-full text-white sub_button">Subscribe</button></div>
        
      </div>
    </div>
    </section>

    <Footer/>

   </div>
   
   </>
  );
}
