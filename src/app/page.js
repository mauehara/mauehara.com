import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <section className="flex flex-1 justify-between flex-col p-10 text-lg">
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
      <section className="flex flex-wrap flex-1 p-10 text-lg gap-20 h-[100dvh] overflow-scroll">
        <article className="flex flex-col flex-1 min-w-[480px] justify-center">
          <figure>
            <Image
              src="/pier.png"
              width={500}
              height={500}
              alt="White Pier's logo on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-4">Pier</h3>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
        <article className="flex flex-col flex-1 min-w-[480px]">
          <figure>
            <Image
              src="/pipo.png"
              width={500}
              height={500}
              alt="White Pier's logo on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-4">Pipo Saúde</h3>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
        <article className="flex flex-col flex-1 min-w-[480px]">
          <figure>
            <Image
              src="/pier.png"
              width={500}
              height={500}
              alt="White Pier's logo on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-4">Pier</h3>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
        <article className="flex flex-col flex-1 min-w-[480px]">
          <figure>
            <Image
              src="/pipo.png"
              width={500}
              height={500}
              alt="White Pier's logo on black background"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px"}}
            />
          </figure>
          <h3 className="mt-4">Pipo Saúde</h3>
          <h4 className="text-slate-400">Design + Development</h4>
        </article>
      </section>
    </main>
  )
}
