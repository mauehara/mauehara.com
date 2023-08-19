import Image from 'next/image'

export default function Home() {
  return (
    <main className="sm:flex sm:min-h-screen sm:flex-row">
      <section className="flex flex-1 justify-between flex-col p-10 h-[75dvh] sm:min-h-screen">
        <section>
          <h1>
            Mauricio Uehara
          </h1>
          <p className="text-slate-400">
            Designer + Developer
          </p>
        </section>
        <section className="flex justify-between">
          <p>
            Currently at <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.piposaude.com.br" target="_blank">Pipo Saúde</a>.
          </p>
          <ul className="flex gap-6">
            <li>
              <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="mailto:mau.uehara@gmail.com" target="_blank">Email</a>
            </li>
            <li>
              <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.linkedin.com/in/mauehara" target="_blank">Linkedin</a>
            </li>
          </ul>
        </section>
      </section>
      <section className="flex-1 p-10 sm:h-[100dvh] sm:overflow-scroll grid sm:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-x-10 gap-y-24 justify-items-center">
        <article className="flex flex-col">
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
          <div className="mt-4 flex justify-between items-baseline">
            <h3>Pipo Saúde</h3>
            <span className="text-xs text-slate-400">Coming soon</span>
          </div>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
        <article className="flex flex-col">
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
          <div className="mt-4 flex justify-between items-baseline">
            <h3>Pier</h3>
            <span className="text-xs text-slate-400">Coming soon</span>
          </div>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
        <article className="flex flex-col">
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
          <div className="mt-4 flex justify-between items-baseline">
            <h3>Pier Redesign</h3>
            <span className="text-xs text-slate-400">Coming soon</span>
          </div>
          <h4 className="text-slate-400">Design</h4>
        </article>
      </section>
    </main>
  )
}
