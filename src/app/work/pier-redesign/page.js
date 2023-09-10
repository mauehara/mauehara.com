import Image from 'next/image';
import Link from 'next/link';
import coverImg from 'public/pier-redesign-cover-2.png'

export default function Page() {
  return (
    <main className="font-normal text-xl mb-10 sm:mt-48 mt-24 w-full mx-auto max-w-[1632px] sm:grid sm:grid-cols-6 p-10 gap-8">
      <header className='sm:col-span-2'>
        <h1 className='tracking-tight sm:text-6xl text-3xl leading-tight'> 
          Pier
        </h1>
      </header>
      <h2 className='tracking-tight sm:text-6xl text-3xl leading-tight sm:col-span-3 col-span-full sm:text-white text-slate-400'>
        Redesigning for trust
      </h2>
      <figure className="col-span-full sm:mt-64 mt-32 mb-24 sm:block hidden">
        <Image
          src={coverImg}
          width={3000}
          height={3000}
          alt="Screenshot of the product homepage"
          placeholder="blur"
          style={{
            width: "100%",
            height: "auto",}}
        />
      </figure>
      <figure className="col-span-full sm:mt-64 mt-32 mb-24 block sm:hidden">
        <Image
          src="/pier-cover-sm.png"
          width={1300}
          height={1300}
          alt="Screenshot of the product homepage"
          style={{
            width: "100%",
            height: "auto",}}
        />
      </figure>
      <h3 className='col-span-full sm:col-span-2 sm:mb-0 mb-8'>
        The problem
      </h3>
      <section className='col-span-full sm:col-span-3'>
        <p>
          In 2020, Pier launched its new auto insurance to the public. Despite 
          keeping the simplicity that made their previous product a success.
          This new product was struggling to gain traction and was presenting 
          poor convertion rates on its landing page.
        </p><br />
        <p>
          I had already left the company by that time, but I was called by the lead
          PM to help the team to figure it out.
        </p>
      </section>
      <hr className='col-span-full opacity-20 mb-32 mt-32'></hr>
      <h3 className='col-span-full sm:col-span-2 sm:mb-0 mb-8'>
        My role
      </h3>
      <section className='col-span-full sm:col-span-3'>
        <p>
          This was a 15-day project and I was responsible for reframing the problem,
          designing a prototype and testing it. I was supported by the team's PM and PD.
        </p>
        <ul className='mt-16 flex sm:flex-row flex-col gap-2 text-slate-400'>
          <li>⌗User Experience</li>
          <li>⌗Prototyping</li>
          <li>⌗Usability Test</li>
          <li>⌗UX Writing</li>
        </ul>
      </section>
      <hr className='col-span-full opacity-20 mb-32 mt-32'></hr>
      <h3 className='col-span-full sm:col-span-2 sm:mb-0 mb-8'>
        Design process
      </h3>
      <section className='col-span-full sm:col-span-3'>
        <p>
          Coming soon.
        </p>
      </section>
      <hr className='col-span-full opacity-20 mb-32 mt-32'></hr>
      <Link className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors " href='/'>← Back</Link>
    </main>
  )
}
