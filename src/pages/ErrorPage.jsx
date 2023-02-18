import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-5xl font-bold mt-20 text-blue-900'>
        CRM - CLIENTES
      </h1>
      <p className='text-center font-semibold'>{error.message}</p>
    </div>
  )
}
export default ErrorPage
