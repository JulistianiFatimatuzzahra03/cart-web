<template>
    <div>
        <div class="bg-gray-100 h-screen py-8">
            <div class="container mx-auto px-4">
                <h1 class="text-2xl font-semibold mb-4">  Keranjang </h1>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-3/4">
                        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th class="text-left font-semibold">produk</th>
                                        <th class="text-left font-semibold">Harga</th>
                                        <th class="text-left font-semibold">Jumlah</th>
                                        <th class="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <img class="h-16 w-16 mr-4" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc0a35b0-b3b8-427c-bf2c-334e0c4beeca/sb-logo-skate-t-shirt-LBBxZV.png" alt="Product image">
                                                <span class="font-semibold"> Belanaja </span>
                                            </div>
                                        </td>
                                        <td class="py-4">19.99</td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                                <span class="text-center w-8">1</span>
                                                <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                            </div>
                                        </td>
                                        <td class="py-4">19.99</td>
                                    </tr>
                                    <!-- More product rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="md:w-1/4">
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-lg font-semibold mb-4">Detail Produk</h2>
                            <div class="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>$19.99</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Harga </span>
                                <span>$1.99</span>
                            </div>
                            <hr class="my-2">
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Total</span>
                                <span class="font-semibold">$21.98</span>
                            </div>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>