import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
const Searchbar = () => {
  return (
    <Autocomplete
      disablePortal
      options={[]}
      id="combo-box-demo"
      popupIcon={<SearchIcon />}
      renderInput={params => <TextField {...params} />}
    />
  )
}

export default Searchbar
