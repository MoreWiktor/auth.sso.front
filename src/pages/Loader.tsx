const Loader = () => {
    return (  
        <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
            <div className="flex items-center">
                <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        </div>
      );
}

export default Loader;