const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL' : prod ? 'http://angeloamadora.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE' : 'http://angeloamadora.herokuapp.com',
    'process.env.CLIENT_ID' :  'Tx1EtxPBuv2OriCqZikmha1p0hEFabHZ'

}