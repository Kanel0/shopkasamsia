"use client";

import { Navbar } from '@/components/Navbar/Navbar';
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci';
import Logo from "@/assets/Logo.png";
import Model1 from "@/assets/model1-rem.png";
import Model2 from "@/assets/model2-rem.png";
import Image from 'next/image';
import "../../components/fonts/font.css";
import { LinkButton, LinkButtonSecondary } from '@/components/Button/Button';
import BlurText from '@/components/Tittle/TextAnimate';


function HomePage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const NavbarContent = (
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer">
            <Image src={Logo} alt="logo ERP" className="h-12 shadow-xl bg-gray-800  w-auto rounded-xl"/>
          </div>
  
          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
  
          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-800 font-[Sanseriffic] font-semibold hover:text-gray-600 no-underline">Accueil</a>
            <a href="#price" className="text-gray-800 font-[Sanseriffic] font-semibold hover:text-gray-600 no-underline">Nos Articles</a>
            <a href="#about" className="text-gray-800 font-[Sanseriffic] font-semibold hover:text-gray-600 no-underline">A propos</a>
            <a href="#service" className="text-gray-800 font-[Sanseriffic] font-semibold hover:text-gray-600 no-underline">Service</a>
            <a href="#contact" className="text-gray-800 font-[Sanseriffic] font-semibold hover:text-gray-600 no-underline ">Contact</a>
            
          </div>
            <div className=' flex '>
                <div className='p-2 mr-4'>
                <LinkButtonSecondary   
                to={`/login`}
                className='font-semibold text-gray-800 font-[Sanseriffic]'
                >Se connecter</LinkButtonSecondary>
                </div>
            <LinkButton className="flex items-center space-x-2 no-underline" to={'/register'}>
                        <CiUser className="text-xl no-underline" />
                        <span className='font-[Sanseriffic]' >Commmencer</span>
            </LinkButton>
            </div>
        </div>
  
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-800 font-[Sanseriffic] hover:text-gray-600">Acceuil</a>
            <a href="#price" className="block text-gray-800 font-[Sanseriffic] hover:text-gray-600">Nos Acticles</a>
            <a href="#about" className="block text-gray-800 font-[Sanseriffic] hover:text-gray-600">A propos</a>
            <a href="#service" className="block text-gray-800 font-[Sanseriffic] hover:text-gray-600">Service</a>
            <a href="#contact" className="block text-gray-800 font-[Sanseriffic] hover:text-gray-600">Contact</a>
            <LinkButton className="flex items-center space-x-2 w-full " to={'/register'}>
              <CiUser className="text-xl" />
              <span className='font-[Sanseriffic]'>Commencer</span>
            </LinkButton>
          </div>
        )}
      </div>
    )
  
    return (
        <div className="min-h-screen bg-[#f6edff] ">      
        <div className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md h-20 md:h-20 z-40" />
        <Navbar content={NavbarContent} className="w-full p-4 md:p-8" />
      
        <main className="container mx-auto px-4 ">
          <section id='home' className="pt-32 md:pt-40 mb-96">
            <div className='flex justify-center items-center '>
            <div>
                <Image 
                src={Model1}
                alt='model1'
                className='w-[200px] h-[400px] mr-20'
                ></Image>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="flex flex-col">
                <BlurText
                  text="Bienvenue sur Kasamsia Shop"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[80px] font-[heightened] text-gray-700 text-center mb-4"
                />
                <BlurText
                  text="Votre boutique en ligne à pétit prix "
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[40px] font-[heightened] text-gray-700 text-center ml-24 mb-8"
                />
                <LinkButton
                  className="flex items-center ml-[190px] justify-center py-3 px-4 w-40 space-x-2 no-underline"
                  to={'/register'}
                >
                  <span className='font-[Sanseriffic]'>Commmencer</span>
                </LinkButton>
              </div>
            </div>
            <div>
                <Image 
                src={Model2}
                alt='model2'
               className='w-[200px] h-[400px] ml-20 ' 
                ></Image>
            </div>
            </div>
          </section>
          {/* <section className=' ml-12  '>
          <AboutUs></AboutUs>
          </section>
          <section className=' ml-12  '>
          <BusinessTasks></BusinessTasks>
          </section>
          <section className=' ml-12  '>
          <ContactForm></ContactForm>
          </section>
          <section className=' ml-12  '>
          <PricingSection></PricingSection>
          </section>
          <section className=' ml-12  '>
          <Footer></Footer>
          </section> */}
        </main>
      </div>
      
    )
  }
  
export default HomePage

