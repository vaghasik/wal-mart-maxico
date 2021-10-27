const DropdownComp = ({data, handleChange}) => {
    return (
        <select onChange={handleChange} >
            { data && data.map((option, key) => <option key={key} >{option}</option>) }
        </select>
    )
}
export default DropdownComp;