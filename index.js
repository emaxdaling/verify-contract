import verify from "./verify";



// api_keys
const api_keys = {
    etherscan: '',
    bscscan: '',
    hecoinfo: '',
    ftmscan: '',
    polygonscan: '',
    snowtrace: '',
    moonscan: ''
}

const network_id = ''

const contracts_build_directory = 'D:/coding/contracts/'


// format contractname + @ + contarctAddress
const _ = ['@']


verify(
    {
        api_keys,
        _,
        network_id,
        contracts_build_directory,
    }
)