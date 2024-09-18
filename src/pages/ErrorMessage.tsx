const ErrorMessage = ({ code, message, description }: { code: number; message: string; description?: string; }) => {
    return (
        <div className="bg-gray-100 px-2 text-center">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-8xl font-extrabold text-red-500">{code}</h1>
                <p className="text-4xl font-medium text-gray-800">{message}</p>
                {description && <p className="text-xl text-gray-800 mt-4">{description}</p>}
            </div>
        </div>
    )
}

export default ErrorMessage;