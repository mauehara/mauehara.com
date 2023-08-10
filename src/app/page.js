export default function Home() {
  return (
    <main className="flex min-h-screen justify-between flex-col p-16 text-lg">
      <section>
        <h1>
          Mauricio Uehara
        </h1>
        <p>
          Designer & Developer, based in São Paulo, Brazil.
        </p>
      </section>
      <section>
        <p>
          Currently at <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.piposaude.com.br" target="_blank">Pipo Saúde</a>.
        </p>
        <p>
        <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="mailto:mau.uehara@gmail.com" target="_blank">Contact me</a> or visit my <a className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors after:transition-colors after:content-[''] after:h-px after:w-full after:absolute relative after:left-0 after:bottom-[-4px] after:bg-slate-600" href="https://www.linkedin.com/in/mauehara" target="_blank">Linkedin</a>.
        </p>
      </section>
    </main>
  )
}
