import { createStore } from "vuex";
// import axios from "axios";
const store = createStore({
    state: {
        boxes: [
            {
                id: 1,
                num: "6",
                txt: "New PO's",
                color:"background-color: #fff44f;"
            },
            {
                id: 2,
                num: "625",
                txt: "Total PO's",
                color:"background-color: #FFABAB;"
            },
            {
                id: 3,
                num: "615",
                txt: 'Total Supplies',
                color:"background-color: #87CBB9;"
            },
            {
                id: 4,
                num: "4",
                txt: 'Supplies In-Transit',
                color:"background-color: #FF6D60;"
            },
            {
                id: 5,
                num: "85,000",
                txt: 'Balance Amount',
                color:"background-color: #ABC4AA;"
            },
            {
                id: 6,
                num: "15,00,000",
                txt: 'Total Amount',
                color:"background-color: #FFB4B4;"
            },
            {
                id: 7,
                num: "3",
                txt: 'Purchase Return',
                color:"background-color: #F5C6EC;"
            },
            {
                id: 8,
                num: "1,00,000",
                txt: 'Current Debit Notes',
                color:"background-color: #94AF9F;"
            },
        ],
        datas:[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}', 
                txt1: 'Fabric 1 Name',
                txt2: 'PO No. 2023/1088',
                txt3: '{02/04/2023 & 18:30}',
                txt4: '2023/56',
                txt5: 'Rs. 15,00,000/(Incl GST)',
                img: "src/assets/cotton.jpg",
                btn: "Goods Received"
            },
            {
                id:2,
                tag:'{02/04/2023 & 18:30}', 
                txt1: 'Fabric 1 Name',
                txt2: 'PO No. 2023/1088',
                txt3: '{02/04/2023 & 18:30}',
                txt4: '2023/56',
                txt5: 'Rs. 15,00,000/(Incl GST)',
                img: "src/assets/cotton.jpg",
                btn: "In-Transit"
            },
        ],
         orders:[
            {
                id:1,
                txt1:'Fabric1 Name',
                // txt2:'PM/001',
                tag:'SO/001008 {02/04/2023 & 18:30}', 
                img: "src/assets/cotton.jpg",
                btn: "Completed by Subject Name"
            },
            {
                id:1,
                txt1:'Purchaser2 Name',
                // txt2:'PM/001',
                tag:'SO/001008 {02/04/2023 & 18:30}',
                img: "src/assets/cotton.jpg",
                btn: "Canceled by Subject Name"
            },
        ],
        receipts :[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}', 
                txt1: 'Fabric 1 Name',
                txt2: 'PO No. 2023/1088',
                txt3: '{02/04/2023 & 18:30}',
                txt4: '2023/56',
                txt5: 'Rs. 15,00,000/(Incl GST)',
                img: "src/assets/cotton.jpg",
                btn: "Goods Deleivered"
            },
        ],
        notis:[
            {
                id: 1,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "6h"
            },
            {
                id: 2,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 3,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
           
            
        ],
         deleivers:[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 1 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "Invoice No. 2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "Goods Rejected"
            },
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 2 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "Invoice No. 2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "In-Transit"
            },
        ],
         dispatches:[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 1 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "Goods Rejected"
            },
           
        ],
    },
    getters: {
        getBoxes(state) {
            return state.boxes;
        },
        getDatas(state) {
            return state.datas;
        },
        getOrders(state) {
            return state.orders;
        },
        getReceipts(state) {
            return state.receipts;
        },
        getNotis(state) {
            return state.notis;
        },
        getDeleivers(state) {
            return state.deleivers;
        },
        getDispatches(state) {
            return state.dispatches;
        },
    },
    mutations: {

    },
    actions: {

    },
});
export default store;