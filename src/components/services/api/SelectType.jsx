import axios from "axios"
import { useEffect, useState } from "react"
import { DivSelect, Select } from "../../Main/styles-main"

const ListType = ({ theme, buscarPokemonsPadrao }) => {
    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const [isStype, setIsType] = useState([])

    useEffect(() => {
        const fetchType = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/type")
            const typeList = response.data.results.slice(0, 18).map(type => type.name)
            setIsType(typeList);
        }
        fetchType()
    }, [])

    const tipoSelecionada = (res) => {
        const selecionado = res.target.value;
        buscarPokemonsPadrao(selecionado); 
    }

    return (
        <>
            <DivSelect>
                <Select theme={theme} onChange={tipoSelecionada}>
                    <option value="All">All</option>
                    {isStype.map((type, index) => (
                        <option key={index} value={type}>
                            {firstUpper(type)}
                        </option>
                    ))}
                </Select>
            </DivSelect>
        </>
    )
}

export default ListType