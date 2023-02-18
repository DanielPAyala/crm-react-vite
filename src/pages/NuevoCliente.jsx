import { useNavigate, Form, useActionData } from 'react-router-dom'
import Error from '../components/Error'
import Formulario from '../components/Formulario'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)

  // validation
  const errores = []
  if (Object.values(data).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  const { email } = data

  const regex =
    /(([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\(\[\]!#-[^-~ \t]|(\\[\t -~]))+)@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*\])/u

  if (!regex.test(email)) {
    errores.push('El email no es válido')
  }

  // return if exists errors
  if (Object.keys(errores).length) {
    return errores
  }
}

function NuevoCliente() {
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method='post' noValidate>
          <Formulario />

          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value='Registrar cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
