import { useState } from "react";
import { useParams } from "react-router-dom";
import { initPageDefaultData } from "../constants";
import { Interfaces, Types } from "../shared/types/page-init-data";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import InitDataProvider from "../layers/InitDataProvider";

const buildInitState = (initData: Types.PageInitDataType): Record<string, string> => 
    initData
        .fields
        .reduce((prev, { title }) => ({
        ...prev,
        [title.toLowerCase()]: '',
        }), {});

const Page = () => {
    const params = useParams<'page' | 'companyId'>() as Interfaces.IGetPageInitDataParams;
    const [pageInitData, setPageInitData] = useState<Types.PageInitDataType>(initPageDefaultData);
    const [formState, setFormState] = useState<Record<string, string>>(buildInitState(pageInitData));

    const changeHandler = (val: React.ChangeEvent<HTMLInputElement>) => setFormState({
        ...formState,
        [val.target.name]: val.target.value,
      });

    return (
        <InitDataProvider params={params} setPageInitData={setPageInitData} >
            <div className={pageInitData.background.style.container}>
                <Form payload={pageInitData.form}>
                    <>
                    {
                        pageInitData.fields.map(({ required, style, title, type }) => (
                        <Input
                            payload={{
                            changeHandler,
                            title,
                            type,
                            value: formState[title.toLowerCase()],
                            required,
                            style,
                            }} 
                            key={title} 
                        />
                        ))
                    }
                    {
                    pageInitData.buttons.map((payload) => (
                        <Button
                        payload={{
                            ...payload,
                            sendingData: formState,
                        }}
                        key={payload.title}
                        />
                    ))
                    }
                    </>
                </Form>
            </div>
        </InitDataProvider>
    )
  };
  
export default Page;