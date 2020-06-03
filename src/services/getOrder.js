export default function getOrder() {
  // const TOKEN = `Bearer nliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnAUsted`
  // const URL = 'https://eshop-deve.herokuapp.com/api/v2/orders/2117155815564'

  // let requestInit = {
  //   method: 'GET',
  //   headers: {
  //     Authorization: TOKEN
  //   }
  // }
  // return  fetch(URL, requestInit)
  //   .then(response => response.json())
  //   .then(data => data)
  //   .catch(error => error)

  return [
    {
      name: 'Televisión de 32"',
      quantity: 1,
      price: 4000,
      sku: '86548'
    },
    {
      name: 'Cardor usb de 3m (M-M)"',
      quantity: 5,
      price: 100.0,
      sku: '69725'
    },
    {
      name: 'Libro el llano en llamas',
      quantity: 4,
      price: 200,
      sku: '11246'
    },
    {
      name: 'iPhone X de 64 GB color Oro',
      quantity: 1,
      price: 18000,
      sku: '876215'
    }
  ]
}
