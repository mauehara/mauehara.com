import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-3xl leading-tight font-normal mb-10 w-full mx-auto max-w-[1632px] p-10">
      <header className="text-base">
        <p>Mauricio Uehara</p>
      </header>
      <section className="h-[66vh] flex flex-col justify-center flex-1">
          <div className="max-w-4xl">
            <h1>
              I design and build digital products. I'm currently working as a design engineer at <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.ashbyhq.com" target="_blank">✴︎ Ashby</a>.
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
      <h2 className="text-base mb-8">Projects</h2>
      <section className="text-2xl grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-24 justify-items-center">
        <Link href="/work/pier" className="group">
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
            <h3 className="mt-8 group-hover:text-lime-300">Pier</h3>
            <h4 className="text-slate-400">Design, Engineering</h4>
          </article>
        </Link>
        <Link href="/work/pier-redesign" className="group">
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
            <h3 className="mt-8 group-hover:text-lime-300">Pier</h3>
            <h4 className="text-slate-400">Design</h4>
          </article>
        </Link>
        <article className="flex flex-col relative opacity-50">
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
            <h4 className="text-slate-400">Design, Engineering</h4>
            <span className="text-xs text-slate-100 absolute top-6 left-6 p-3 bg-black">Coming soon</span>
          </article>
      </section>
      <footer className='text-base mt-60 text-slate-600'>© {new Date().getFullYear()}</footer>
    </main>
  )
}
