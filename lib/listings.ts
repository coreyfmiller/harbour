export type Listing = {
  id: string
  title: string
  address: string
  price: string
  beds: number
  baths: number
  sqft: string
  status: 'For Sale' | 'New' | 'Pending'
  image: string
}

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Bayview Shingle Estate',
    address: '14 Water Street, Saint Andrews, NB',
    price: '$1,485,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    status: 'New',
    image: '/images/listing-1.png',
  },
  {
    id: '2',
    title: 'Hydrangea Cottage',
    address: '82 Montague Street, Saint Andrews, NB',
    price: '$689,000',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    status: 'For Sale',
    image: '/images/listing-2.png',
  },
  {
    id: '3',
    title: 'Atlantic Glass House',
    address: '5 Indian Point Road, Saint Andrews, NB',
    price: '$2,150,000',
    beds: 4,
    baths: 5,
    sqft: '5,100',
    status: 'New',
    image: '/images/listing-3.png',
  },
  {
    id: '4',
    title: 'Heritage Victorian',
    address: '31 King Street, Saint Andrews, NB',
    price: '$925,000',
    beds: 6,
    baths: 3,
    sqft: '3,600',
    status: 'For Sale',
    image: '/images/listing-4.png',
  },
  {
    id: '5',
    title: 'Dockside Bungalow',
    address: '9 Harbour Lane, Saint Andrews, NB',
    price: '$775,000',
    beds: 3,
    baths: 2,
    sqft: '1,600',
    status: 'Pending',
    image: '/images/listing-5.png',
  },
  {
    id: '6',
    title: 'Colonial on the Green',
    address: '48 Prince of Wales Street, Saint Andrews, NB',
    price: '$845,000',
    beds: 4,
    baths: 3,
    sqft: '2,900',
    status: 'For Sale',
    image: '/images/listing-6.png',
  },
]
