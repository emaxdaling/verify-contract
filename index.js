
const verify = require('./verify')




// api_keys
const api_keys = {
    etherscan: '8ZWRYQ813QJPWGAXEH6J5D1DB4T8H8IY1F',
    bscscan: 'G5QFWT7YW7T18AFGQSK8VQTIVS83N6CGP8',
    hecoinfo: '',
    ftmscan: '',
    polygonscan: 'U4WJBWN2EAXTR8N4KVIATMUE2RHRU7EN7T',
    snowtrace: 'SWT7AEGC3KK54XHB18WFFR6V7C3B55RP1S',
    moonscan: ''
}

const network_id = '97'

const contracts_build_directory = '...'


// format contractname + @ + contarctAddress
const _ = ['MyToken@0xFa1B962EB4AC24028d0A42A31571464248A96D65']


verify(
    {
        api_keys,
        _,
        network_id,
        contracts_build_directory,
    }
)