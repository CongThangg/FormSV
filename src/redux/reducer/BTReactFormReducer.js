const stateDefault = {
    danhSachSV: [
        {
            maSV: "1",
            hoTen: "Lương Công Thắng",
            sdt: "0378288639",
            email: "luongcongthang@gmaol.com"
        }
    ],
    chiTietSinhVien: {
        maSV: "",
        hoTen: "",
        sdt: "",
        email: ""
    },
    sinhVien: {
        value: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        },

        error: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        }
    }
}

export const BTReactFormReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "HANDLE_INPUT":
            state.sinhVien = action.sinhVien
            return { ...state }
        case 'THEM_SINH_VIEN':
            state.danhSachSV = [...state.danhSachSV, action.sinhVien.value]
            return { ...state }
        case 'XOA_SV':
            console.log("Sv XÓA", action.maSVXoa)
            state.danhSachSV = [...state.danhSachSV.filter((sv) => {
                return sv.maSV !== action.maSVXoa
            })]
            return { ...state }
        case "SUA_SV":
            state.sinhVien.value = action.valueSV
            state.sinhVien = { ...state.sinhVien }
            return { ...state }
        case"CAP_NHAT_SV":
        let index = state.danhSachSV.findIndex(sv => sv.maSV===action.sinhVienUpdate.maSV);
        if(index>-1){ 
            state.danhSachSV[index]=action.sinhVienUpdate 
        }
        state.danhSachSV=[...state.danhSachSV]
        return { ...state }





        default:
            return { ...state };
    }
}