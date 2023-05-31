import { useState } from "react"

interface Props {
    label: string
    options: Option[]
    defaultSelection?: string
    onSelect: (data: string) => void
}


const CustomSelect = ({label, options, defaultSelection = 'All', onSelect}: Props) => {
  const [selected, setSelected] = useState(defaultSelection);

  const onSelection = (data: string) => {
    setSelected(data)
    onSelect(data);
  }

  return (
    <>
        <label htmlFor={label} className="form-label">{label}</label>
        <select className="form-select" aria-label={label} defaultValue={selected} onChange={(event) => onSelection(event.target.value)} required>
            {options.map((opt) => <option value={opt.value} key={opt.value}>{opt.label}</option>)}
        </select>
    </>
  )
};

export default CustomSelect