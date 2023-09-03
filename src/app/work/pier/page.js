import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="font-normal text-xl mb-10 sm:mt-48 mt-24 w-full mx-auto max-w-[1632px] sm:grid sm:grid-cols-6 p-10">
      <header className='sm:col-span-2'>
        <h1 className='tracking-tight sm:text-5xl text-3xl leading-tight'> 
          Pier
        </h1>
      </header>
      <h2 className='tracking-tight sm:text-5xl text-3xl leading-tight sm:col-span-2 col-span-full sm:text-white text-slate-400'>
        The first Brazilian digital insurance company 
      </h2>
      <figure className="col-span-full sm:mt-64 mt-32 mb-24 sm:block hidden">
        <Image
          src="/pier-cover.png"
          width={3000}
          height={3000}
          alt="Screenshot of the product homepage"
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
        My Role
      </h3>
      <section className='col-span-full sm:col-span-3'>
        <p>
          As the first designer of the team, I was responsible for the design
          and frontend development of our web and mobile interfaces. I've also
          had a key participation in the brand and product strategy.
        </p>
        <ul className='mt-16 flex sm:flex-row flex-col gap-2 text-slate-400'>
          <li>Strategy</li>
          <li>User Experience</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Rails</li>
          <li>React Native</li>
        </ul>
      </section>
      <hr className='col-span-full opacity-20 mb-32 mt-32'></hr>
      <div className='col-span-full sm:col-span-2 sm:mb-0 mb-16'>
        <h3>
          Outcomes
        </h3>
        <p className='text-slate-400'>
          First Year
        </p>
      </div>
      <div className='col-span-full sm:col-span-2 sm:mb-0 mb-24'>
        <h4 className='text-8xl mb-4'>91%</h4>
        <p className='text-sm'>NPS • Industry average is 34%</p>
      </div>
      <div className='col-span-full sm:col-span-2 mb-24'>
        <h4 className='text-8xl mb-4'>3k</h4>
        <p className='text-sm'>Paid customers</p>
      </div>
      <div className='col-span-full sm:col-span-2 col-start-3 sm:mb-0 mb-24'>
        <h4 className='text-8xl mb-4'>7%</h4>
        <p className='text-sm'>Weekly growth</p>
      </div>
      <div className='col-span-full sm:col-span-2 mb-24'>
        <h4 className='text-8xl mb-4'>2</h4>
        <p className='text-sm'>Investment rounds</p>
      </div>
      <hr className='col-span-full opacity-20 mb-32 mt-32'></hr>
      <Link className="hover:text-lime-300 hover:after:bg-lime-300 transition-colors " href='/'>← Back</Link>
    </main>
  )
}