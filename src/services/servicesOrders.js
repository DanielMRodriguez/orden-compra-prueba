const ORDERS = [
  {
    id: 1,
    requestName: 'Luis Daniel',
    date: '20/06/2020 3:45pm',
    items: [
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
  },
  {
    id: 2,
    requestName: 'Javier Martinez',
    date: '08/06/2020 1:30pm',
    items: [
      {
        name: 'Redmi Note 7',
        quantity: 1,
        price: 4000,
        sku: '86548'
      },
      {
        name: 'Multifuncional a color Epson EcoTank L5190',
        quantity: 2,
        price: 5899,
        sku: '69725'
      },
      {
        name: 'Access Point Ubiquiti Networks',
        quantity: 3,
        price: 2999,
        sku: '157802'
      },
      {
        name: 'Disco Duro Seagate 500 GB',
        quantity: 3,
        price: 499,
        sku: 'ST3500312CS'
      }
    ]
  }
]

function getOrder(id) {
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
  let idOrdern = parseInt(id)
  const found = ORDERS.find(element => element.id == idOrdern)
  // console.log(found)
  return found.items
}

function getOrders() {
  return ORDERS
}

export { getOrder, getOrders }
