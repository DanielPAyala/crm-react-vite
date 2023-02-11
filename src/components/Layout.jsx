import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-800 px-5 py-10'>
        <h2 className='text-4xl text-center font-black text-white'>
          CRM - Clientes
        </h2>

        <nav className='mt-10'>
          <Link
            className={`${
              location.pathname === '/' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 font-semibold hover:text-blue-400`}
            to='/'
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === '/clientes/nuevo'
                ? 'text-blue-300 font-bold'
                : 'text-white'
            } text-2xl block mt-2 font-semibold hover:text-blue-400`}
            to='/clientes/nuevo'
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen md:overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
