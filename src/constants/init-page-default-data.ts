import { DeepRequired } from "../shared/types/common";
import { Enums, Types } from "../shared/types/page-init-data";

export const initPageDefaultData: DeepRequired<Types.PageInitDataType> = {
    page: Enums.PagesEnum.SIGNUP,
    fields: [{
      title: 'email',
      type: Enums.InputTypeEnum.EMAIL,
      style: {
        input: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
        container: "mb-4",
        label: "block text-gray-700",
      },
      required: true,
    }, {
      title: 'password',
      type: Enums.InputTypeEnum.PASSWORD,
      style: {
        input: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
        container: "mb-4",
        label: "block text-gray-700",
      },
      required: true,
    }],
    buttons: [{
      title: 'SignUp',
      type: Enums.ButtonTypeEnum.SUBMIT,
      style: {
        base: "w-full text-white py-2 rounded-md transition duration-300",
        primary: "bg-blue-500 hover:bg-blue-600",
        done: "bg-green-500 hover:bg-green-600",
        error: "bg-red-500 hover:bg-red-600",
        loading: "bg-blue-500 hover:bg-blue-600",
      },
    }],
    form: {
      title: 'SignUp',
      style: {
        title: "text-2xl font-bold mb-6 text-center",
        container: "bg-white p-6 rounded shadow-md w-full max-w-md",
      }
    },
    background: {
      style: {
        container: "min-h-screen bg-gray-100 flex items-center justify-center",
      },
    },
  };