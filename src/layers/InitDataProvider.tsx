import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Interfaces, Types } from "../shared/types/page-init-data";
import { pageInitDataQuery } from "../api/queries";
import Loader from "../pages/Loader";
import ErrorMessage from "../pages/ErrorMessage";
import { toast } from "react-toastify";

export type InitDataProviderProps = {
  setPageInitData: Dispatch<SetStateAction<Types.PageInitDataType>>;
  params: Interfaces.IGetPageInitDataParams,
  children: React.ReactElement;
}

export type InitDataProviderState = {
  isLoading: boolean;
  isError: boolean;
  error?: Error;
}

export const notification = (
  message: string,
  type: 'info' | 'success' | 'warning' | 'error' = 'info'
) => {
  return toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type
  });
};

const InitDataProvider = ({ setPageInitData, children }: InitDataProviderProps) => {
  const params = useParams<'page' | 'companyId'>() as unknown as Interfaces.IGetPageInitDataParams;
  const [state, setState] = useState<InitDataProviderState>({
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
      setState({
          isError: false,
          isLoading: true,
      });
      pageInitDataQuery({ params, setPageInitData, setState });
  }, [params, setPageInitData]);
  
  if (state.isLoading) {
    return (
    <Loader />
    );
  }
  if (state.isError && state.error) {
    return (
    <ErrorMessage code={500} message={state.error.message} />
    );
  }
  if (state.error && !state.isError) {
    notification(state.error.message, 'error');
  }
  return (children);
}

export default InitDataProvider;