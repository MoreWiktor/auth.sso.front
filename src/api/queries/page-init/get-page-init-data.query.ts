import { Dispatch, SetStateAction } from "react";
import { Interfaces, Types } from "../../../shared/types/page-init-data";
import { initPageDefaultData } from "../../../constants";
import axios from "axios";
import { InitDataProviderState } from "../../../layers/InitDataProvider";

type PageInitDataQueryType = { 
    params: Interfaces.IGetPageInitDataParams;
    setState: Dispatch<SetStateAction<InitDataProviderState>>;
    setPageInitData: Dispatch<SetStateAction<Types.PageInitDataType>>;
}

export const pageInitDataQuery = async ({ params, setPageInitData, setState }: PageInitDataQueryType): Promise<Types.PageInitDataType | void> => {
    const { companyId, page } = params;
    const adminSSOBaseUrl = import.meta.env.VITE_ADMIN_SSO_BASE_URL;
    const url = `${adminSSOBaseUrl}api/pages/init/${page}/${companyId ?? `${companyId}`}`;
    return axios.get<Interfaces.IGetPageInitDataResponse>(url)
        .then((response) => response.data.data)
        .then((pageInitData) => {
            setState({
                isError: false,
                isLoading: false,
            });
            setPageInitData(pageInitData);
            return pageInitData;
        })
        .catch((error) => {
            setState({
                isError: true,
                isLoading: false,
                error,
            });
            setPageInitData(initPageDefaultData);
        });
  }