import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Services() {
    const { addNewService, state } = useContext(GlobalContext)
    const [data, setData] = useState({ name: "", price: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNewService(data)
    }

    const handleInput = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    return (

        <>
            <form>
                {/* nombre y precio, añadir al estado */}
                <div>
                    <label>Nombre: </label>
                    <input type="text" id="name" placeholder='Añadir nombre' onChange={handleInput} />
                </div>
                <div>
                    <label>Precio: </label>
                    <input type="number" id="price" placeholder='Añadir precio' onChange={handleInput} />
                </div>
                <div>
                    <input type="submit" onClick={handleClick} />
                </div>
            </form>

            {state.services.map(item => <p>{item.name} - {item.price} </p>)}
        </>

    )
}

export default Services