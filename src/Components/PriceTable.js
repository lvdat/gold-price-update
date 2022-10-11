import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function deviant (a, b) {
    return (a > b) ?     
     <Fragment>
         <span className="down">
         <FontAwesomeIcon icon={solid("caret-down")} />
         { (a - b) }
         </span>
     </Fragment>
     : (a < b) ? 
     <Fragment>
         <span className="up">
         <FontAwesomeIcon icon={solid("caret-up")} />
         { (b - a) }
         </span>
     </Fragment> : '';
 }

export default function PriceTable ({ dataPriceTable }) {
    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="table-auto min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                    style={{ width: '10%' }}
                                >
                                    Công ty
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-cente text-black-500 uppercase "
                                    style={{ width: '40%' }}
                                >
                                    Loại vàng
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                    style={{ width: '25%' }}
                                >
                                    Mua vào
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                    style={{ width: '25%' }}
                                >
                                    Bán ra
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {dataPriceTable.map((item) => (
                                <tr key={item.id} className="odd:bg-white even:bg-slate-50 hover:bg-gray-200 hover:ring-gray-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        <div className="items-center">
                                            <div className="flex-shrink-0 h-auto">
                                                <img
                                                    className="h-auto"
                                                    src={item.logo}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-900">
                                        {item.loaivang}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        <div className="grid grid-cols-2">
                                            <div className="text-right pr-1">
                                                {item.muavao}
                                            </div>
                                            <div className="text-left pl-1">
                                                {deviant(item.muavao, item.muavaoHomqua)}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        <div className="grid grid-cols-2">
                                            <div className="text-right pr-1">
                                                {item.banra}
                                            </div>
                                            <div className="text-left pl-1">
                                                {deviant(item.banra, item.banraHomqua)}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}