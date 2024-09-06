import { useAxiosRequest } from "../use-axios-request.hook";
import { UsePageStylesType } from "./use-page-styles.interface";

export const usePageStyles: UsePageStylesType = ({ page, companyId }) => {
    const adminSSOBaseUrl = import.meta.env.VITE_ADMIN_SSO_BASE_URL;
    const url = `${adminSSOBaseUrl}api/styles/${page}/${companyId ?? `${companyId}`}`;
    return useAxiosRequest(url);
}