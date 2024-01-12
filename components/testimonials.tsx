import Image from 'next/image'
import TestimonialImage from '@/public/images/headshot.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Product - Process - People <br></br>
            Business - Data - Tech</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Consumertech portfolio MAU 20m+<br>
            </br> Transformative solutions for startup, scaleup, enterprise<br></br>
            Advisor to founders, investors, vendor procurement</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src="/images/logos/ABS-CBN.svg" alt="abs-cbn" width={125} height={39} />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src="/images/logos/datazoom_logo.webp" alt="datazoom" width={125} height={39} />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src="/images/logos/ericsson.png" alt="ericsson" width={125} height={39} />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src="/images/logos/iflix7255.jpeg" alt="iflix" width={125} height={39} />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
            <Image src="/images/logos/shine_logo.jpeg" alt="shine" width={125} height={39} />
            </div>

          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20 pt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute -top-10 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative rounded-full" src={TestimonialImage} width={150} height={150} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                Experienced Leader, melding data, AI, and product strategy to drive business outcomes worldwide. Known for integrating data insights, business acumen, and technical skill, I've pioneered impactful innovations and data-driven decision-making, leading diverse teams to align with key business objectives.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Alex Savage</cite>
                {/* <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div> */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}