import { Form, redirect, useNavigate } from 'react-router-dom'
import { eliminarCliente } from '../data/clientes'

export async function action({ params }) {
  await eliminarCliente(params.id)
  return redirect('/')
}

function Cliente({ cliente }) {
  const navigate = useNavigate()

  const { nombre, empresa, email, telefono, id } = cliente

  const eliminarCliente = (e) => {
    if (!confirm('¿Deseas eliminar este registro?')) {
      e.preventDefault()
    }
  }

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800'>{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Email: </span>
          {email}
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
          {telefono}
        </p>
      </td>
      <td className='p-6 flex gap-3 justify-center'>
        <button
          className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
          type='button'
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form
          method='post'
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => eliminarCliente(e)}
        >
          <button
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
            type='submit'
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Cliente
