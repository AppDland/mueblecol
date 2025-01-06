// import axios from 'axios';

// const useCartService = () => {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     const getCart = async () => {
//         try {
//             const { data } = await axios.get(`${apiUrl}/getcart`);
//             return data;
//         } catch (error: any) {
//             throw error.response.data.message || "";
//         }
//     };

//     const addProductToCart = async () => {
//         try {
//             const { data } = await axios.post(`${apiUrl}/addcart`);
//             return data;
//         } catch (error: any) {
//             throw error.response.data.message || "";
//         }
//     };

//     const removeProductFromCart = async () => {
//         try {
//             const { data } = await axios.delete(`${apiUrl}/removecart`);
//             return data;
//         } catch (error: any) {
//             throw error.response.data.message || "";
//         }
//     };

//     return {
//         getCart,
//         addProductToCart,
//         removeProductFromCart,
//     };
// }

// export default useCartService;