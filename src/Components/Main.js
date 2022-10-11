import { PaperClipIcon } from '@heroicons/react/20/solid'
import PriceTable from './PriceTable'
import PriceChart from './PriceChart'
import Header from './Header'
import Bread from './Bread'

const dataPriceTable = [
  {
    id: 1,
    congty: 'PNJ',
    loaivang: 'Hà Nội - SJC',
    muavao: 45000,
    banra: 45000,
    muavaoHomqua: 64000,
    banraHomqua: 46000,
    logo: '/images/pnj_logo.png',
  },
  {
    id: 2,
    congty: 'PNJ',
    loaivang: 'Hà Nội - SJC',
    muavao: 45000,
    banra: 45000,
    muavaoHomqua: 46000,
    banraHomqua: 30000,
    logo: '/images/pnj_logo.png',
  },
  {
    id: 3,
      congty: 'PNJ',
      loaivang: 'TPHCM - SJC',
      muavao: 45000,
      banra: 45000,
      muavaoHomqua: 47000,
      banraHomqua: 29000,
      logo: '/images/pnj_logo.png',
  },
  {
    id: 4,
    congty: 'PNJ',
    loaivang: 'SJC',
    muavao: 45000,
    banra: 45000,
    muavaoHomqua: 105000,
    banraHomqua: 90000,
    logo: '/images/pnj_logo.png',
  },
  
]

export default function Main() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Header />
        <Bread title="Cập nhật giá vàng" />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="grid md:grid-cols-2">
                <div>
                    <PriceTable dataPriceTable={dataPriceTable} />
                </div>
                <div>
                    <PriceChart />
                </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
