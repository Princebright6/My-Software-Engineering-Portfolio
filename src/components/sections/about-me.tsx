import Image from 'next/image';

import CommandGoldPic from '/public/images/gold pic 2.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={CommandGoldPic}
              alt="Fullpose of Commanda Gold"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{' '}
            self-proclaimed frontend developer{' '}
            with a strong foundation in design and a growing passion for full stack development. My journey into tech began through collaboration — as a graphic designer, I was invited by friends in software engineering to help design UI components for their projects. That early exposure sparked a deep interest, 
            and I soon found myself immersed in the world of code.
          </Typography>
          <Typography>
          Back in 2015, I challenged myself to recreate a user interface using Photoshop and Dreamweaver — not because I had to, but to prove I could. Since then, I've grown from designing in Figma to building dynamic web interfaces with HTML, CSS, JavaScript, and Next.js. Today, I'm expanding my skills into backend technologies like Python, Django, and MySQL, with a long-term 
          goal of becoming a fully proficient full stack developer.
          </Typography>
          <Typography>
          My approach is design-led: I care deeply about aesthetics, usability, and crafting experiences that are intuitive and impactful. I'm currently freelancing while continuing to learn and build, driven by a desire to offer tech solutions that make life easier for users — whether that's an Uber-like 
          driver app or an e-commerce platform connecting buyers and sellers.
          </Typography>
          <Typography>
          When &apos;m not coding, you&apos;ll likely find me watching movies,
           exploring creative ideas, or chasing a bit of adventure.
            One day, I hope to lead a tech company focused on solving
             real-world problems through smart, accessible, 
             and beautifully crafted software. {' '}
            {/* <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
             Twitter
            </Link>{' '} */}
         
            
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring Full Stack Developer</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
