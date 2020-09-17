const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL' : prod ? 'http://amadora.tech' : 'http://localhost:3000',
    'process.env.NAMESPACE' : 'http://amadora.tech',
    'process.env.CLIENT_ID' :  'Tx1EtxPBuv2OriCqZikmha1p0hEFabHZ'

}