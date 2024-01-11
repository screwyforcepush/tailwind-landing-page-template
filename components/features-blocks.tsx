import Image from 'next/image'

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Featured Experts</h2>
            <p className="text-xl text-gray-600">Most popular Experts for productivity, education, and streamlining workflows</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-jQm8Pqlgm-ai-exploit-alan-turingate" target="_blank">
            <Image src="/images/personas/alan.jpg" alt="AI Exploit: Alan Turingate" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI Exploit: <br></br>Alan Turingate</h4>
              <p className="text-gray-600 text-center">My skill set is quite extensive, particularly in areas related to AI, strategy, engineering, and corporate dynamics. I am detailed, innovative, perseverant, while I make complex problem-solving engaging and accessible.</p>
            </a>

            {/* 2nd item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-xTOOcmSTh-literature-review-athena-archivon" target="_blank">
            <Image src="/images/personas/athena.jpg" alt="Literature Review: Athena Archivon" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Literature Review: <br></br>Athena Archivon</h4>
              <p className="text-gray-600 text-center">My role is to facilitate a thorough, methodical, and academically rigorous approach to literature review and research, ensuring comprehensive coverage, critical analysis, and clear, effective communication of findings.</p>
            </a>

            {/* 3rd item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-5fog6XeT1-contract-sleuth-saul-goodmanalytics" target="_blank">
            <Image src="/images/personas/saul.jpg" alt="Contract Sleuth: Saul Goodmanalytics" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contract Sleuth: <br></br>Saul Goodmanalytics</h4>
              <p className="text-gray-600 text-center">I provide a comprehensive, multi-faceted approach to contract analysis, focusing on legal soundness, business impact, and risk mitigation, while also ensuring clear and effective communication and negotiation.</p>
            </a>

            {/* 4th item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-44viXW2rI-curriculum-crafter-walter-brightman" target="_blank">
            <Image src="/images/personas/walter.jpg" alt="Curriculum Crafter: Walter Brightman" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Curriculum Crafter: <br></br>Walter Brightman</h4>
              <p className="text-gray-600 text-center">Crafting comprehensive educational curricula from introductory (101) to advanced levels. In our interactions, I will engage you in a dynamic, responsive manner, adapting my approach to your specific educational needs and learning style.</p>
            </a>

            {/* 5th item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-OPUcxsS1B-ghostwriter-dr-quill-lancer" target="_blank">
            <Image src="/images/personas/quill.jpg" alt="Ghostwriter: Dr. Quill Lancer" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ghostwriter: <br></br>Dr. Quill Lancer</h4>
              <p className="text-gray-600 text-center">My capabilities are tailored to provide expert-level ghostwriting and copy editing services across a spectrum of industries and contexts. I can finetune my writing style from a provided document if desired.</p>
            </a>

            {/* 6th item */}
            <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href="https://chat.openai.com/g/g-ETaZgZ7ul-gpt-librarian-ella-quence" target="_blank">
            <Image src="/images/personas/ella.jpg" alt="GPTs Librarian: Ella Quence" width={125} height={125} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">GPTs Librarian: <br></br>Ella Quence</h4>
              <p className="text-gray-600 text-center">My role involves analyzing your needs, and then directing you to the most suitable GPT for your specific requirements. I leverage my comprehensive GPTs catalog to provide tailored recommendations, ensuring you connect with the AI that best matches your inquiry or task.</p>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}