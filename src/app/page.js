import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-3xl leading-tight font-normal mb-10 w-full mx-auto max-w-[1632px] p-10">
      <section className="h-[66vh] flex flex-col justify-center flex-1">
          <div className="max-w-4xl">
            <h1>
              Mauricio Uehara is a product designer with a knack for coding, currently working at <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.piposaude.com.br" target="_blank">✴︎ Pipo Saúde</a>.
            </h1>
            <ul className="flex gap-6 w-4xl mt-16">
              <li>
                <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="mailto:mau.uehara@gmail.com" target="_blank">✴︎ Email</a>
              </li>
              <li>
                <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.linkedin.com/in/mauehara" target="_blank">✴︎ Linkedin</a>
              </li>
            </ul>
          </div>
      </section>
      <section className="text-2xl grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-x-10 gap-y-24 justify-items-center">
        <article className="flex flex-col relative">
          <figure>
            <Image
              src="/pipo-black.png"
              width={500}
              height={500}
              alt="Black circle on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-8">Pipo Saúde</h3>
          <h4 className="text-slate-400">Design, Coding</h4>
          <span className="text-xs text-slate-400 absolute top-6 left-6 p-3 bg-black">Coming soon</span>
        </article>
        <article className="flex flex-col relative">
          <figure>
            <Image
              src="/pier-black.png"
              width={500}
              height={500}
              alt="Black slash on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-8">Pier</h3>
          <h4 className="text-slate-400">Design, Coding</h4>
          <span className="text-xs text-slate-400 absolute top-6 left-6 p-3 bg-black">Coming soon</span>
        </article>
        <article className="flex flex-col relative">
          <figure>
            <Image
              src="/pier-black-redesign.png"
              width={500}
              height={500}
              alt="Black striped circled on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-8">Pier Redesign</h3>
          <h4 className="text-slate-400">Design</h4>
          <span className="text-xs text-slate-400 absolute top-6 left-6 p-3 bg-black">Coming soon</span>
        </article>
      </section>
      <footer className='text-2xl mt-60 text-slate-600'>© {new Date().getFullYear()}</footer>
    </main>
  )
}
