export default function PriceTable () {
    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                >
                                    Công ty
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-cente text-black-500 uppercase "
                                >
                                    Loại vàng
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                >
                                    Mua vào
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase "
                                >
                                    Bán ra
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>    
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    1
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Jone Doe
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    jonne62@gmail.com
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    jonne62@gmail.com
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}